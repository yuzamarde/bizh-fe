"use client";

import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./PhotoView.module.sass";
import Icon from "../Icon";
import Share from "../Share";
import Link from "next/link";
import Slider from "react-slick";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const PhotoView = ({ title, initialSlide, visible, items, onClose }) => {
  const [current, setCurrent] = useState(initialSlide);
  const [mounted, setMounted] = useState(false); // ⬅️ fix for SSR document

  const scrollRef = useRef(null);

  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setMounted(true); // mark that we're on client
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    visible ? disableBodyScroll(scrollRef) : enableBodyScroll(scrollRef);
  }, [visible]);

  useEffect(() => {
    setCurrent(initialSlide);
  }, [initialSlide]);

  const settings = {
    initialSlide: initialSlide,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setCurrent,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
  };

  if (!mounted) return null; // ⬅️ return null on SSR

  return createPortal(
    visible && (
      <div className={styles.modal} ref={scrollRef}>
        <div className={styles.outer}>
          <OutsideClickHandler onOutsideClick={onClose}>
            <div className={styles.container}>
              <div className={styles.control}>
                <Link
                  href="/full-photo"
                  className={cn("button-stroke button-small", styles.button)}
                  onClick={onClose}
                >
                  <Icon name="image" size="16" />
                  <span>Show all photos</span>
                </Link>
                <div className={styles.counter}>
                  {current + 1}/{items.length}
                </div>
                <div className={styles.btns}>
                  <Share className={styles.share} darkButton />
                  <button
                    className={cn(
                      "button-circle-stroke button-small",
                      styles.button
                    )}
                    onClick={onClose}
                  >
                    <Icon name="close" size="24" />
                  </button>
                </div>
              </div>
              <div className={styles.wrapper}>
                <Slider
                  className="photo-slider"
                  {...settings}
                >
                  {items.map((x, index) => (
                    <div className={styles.slide} key={index}>
                      <div className={styles.preview}>
                        <img src={x} alt="Gallery" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.title}>{title}</div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    ),
    document.body
  );
};

export default PhotoView;

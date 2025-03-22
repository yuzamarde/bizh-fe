"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./Modal.module.sass";
import Icon from "../Icon";

const Modal = ({ outerClassName, visible, onClose, children }) => {
  const scrollRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Escape handler
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setMounted(true); // modal akan dirender hanya setelah client mounted
  }, []);

  useEffect(() => {
    if (visible) {
      document.addEventListener("keydown", escFunction);
    }

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction, visible]);

  useEffect(() => {
    if (scrollRef.current) {
      visible ? disableBodyScroll(scrollRef.current) : enableBodyScroll(scrollRef.current);
    }
  }, [visible]);

  if (!mounted) return null;

  return createPortal(
    visible && (
      <div className={styles.modal} ref={scrollRef}>
        <div className={cn(styles.outer, outerClassName)}>
          <OutsideClickHandler onOutsideClick={onClose}>
            {children}
            <button className={styles.close} onClick={onClose}>
              <Icon name="close" size="24" />
            </button>
          </OutsideClickHandler>
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;

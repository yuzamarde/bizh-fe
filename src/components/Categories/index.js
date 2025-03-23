import React from "react";
import cn from "classnames";
import styles from "./Categories.module.sass";
import dynamic from "next/dynamic";
import Item from "./Item";
import Icon from "../Icon";

// Load Slider only on client side
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Custom arrow with proper props
const SlickArrow = ({ className, style, onClick, icon }) => (
  <button
    type="button"
    className={className}
    style={{ ...style, display: "block", zIndex: 10 }}
    onClick={onClick}
  >
    <Icon name={icon} size="14" />
  </button>
);

const Categories = ({ classSection, title, info, items }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SlickArrow icon="arrow-next" />,
    prevArrow: <SlickArrow icon="arrow-prev" />,
    responsive: [
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>{title}</h2>
          <div className={cn("info", styles.info)}>{info}</div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="categories-slider" {...settings}>
            {items.map((x, index) => (
              <Item className={styles.item} item={x} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;

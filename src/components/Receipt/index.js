import React from "react";
import cn from "classnames";
import styles from "./Receipt.module.sass";
import Icon from "../Icon";
import Travelers from "../Travelers";

const Receipt = ({
  className,
  items,
  children,
  priceOld,
  priceActual,
  time,
  rating,
  avatar,
  reviews
}) => {
  return (
    <div className={cn(className, styles.receipt)}>
      <div className={styles.head}>
        <div className={styles.details}>
          <div className={styles.cost}>
            <div className={styles.old}>IDR {priceOld}</div>
            <div className={styles.actual}>IDR {priceActual}</div>
            <div className={styles.note}>{time}</div>
          </div>
          <div className={styles.rating}>
            <Icon name="star" size="20" />
            <div className={styles.number}>{rating}</div>
            <div className={styles.reviews}>{reviews}</div>
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
          <div className={styles.check}>
            <Icon name="check" size="12" />
          </div>
        </div>
      </div>
      <div
        className={cn(styles.description, {
          [styles.flex]: items.length > 1,
        })}
      >
        <Travelers
          className={styles.travelers}
          title="Travelers"
          description="Add guests"
          icon="user"
        />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Receipt;

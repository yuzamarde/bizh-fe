import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Link from "next/link";

const Item = ({ item, className }) => {
  return (
    <Link className={cn(styles.item, className)} href={item.url}>
      <div className={cn("status-gray", styles.number)}>{item.number}</div>
      <div className={styles.preview}>
        <img src={item.image} alt="Place" />
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.time}>{item.time}</div>
    </Link>
  );
};

export default Item;

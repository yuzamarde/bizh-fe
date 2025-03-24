"use client";
import React, { useState } from "react";
import cn from "classnames";
import styles from "./Favorite.module.sass";
import Icon from "../Icon";

const Favorite = ({ className }) => {
  const [visible, setVisible] = useState(false);
  return (
    <button
      className={cn("button-circle-stroke button-small", styles.button__small, styles.button__stroke, styles.button, {
        [styles.active]: visible,
      })}
      onClick={() => setVisible(!visible)}
    >
      <Icon name="heart" size="24"
        className={cn(styles.button__svg)} />
      <Icon name="heart-fill" size="24"
        className={cn(styles.button__svg, styles.heart)} />
    </button>
  );
};

export default Favorite;

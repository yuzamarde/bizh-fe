"use client";
import React, { useState } from "react";
import cn from "classnames";
import styles from "./Share.module.sass";
import Icon from "../Icon";
import OutsideClickHandler from "react-outside-click-handler";


const Share = ({ className, openUp, darkButton }) => {
  const [visible, setVisible] = useState(false);
  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(
          className,
          styles.share,
          { [styles.openUp]: openUp },
          { [styles.darkButton]: darkButton }
        )}
      >
        <button
          className={cn("button-circle-stroke button-small", styles.button__small, styles.button__stroke, styles.button, {
            [styles.active]: visible,
          })}
          onClick={() => setVisible(!visible)}
        >
          <Icon name="share" size="24"
            className={cn(styles.button__svg)} />
        </button>
        <div className={cn(styles.body, { [styles.show]: visible })}>
          <div className={styles.title}>Share link to this page</div>

        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Share;

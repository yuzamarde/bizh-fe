"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Language.module.sass";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import Icon from "../../Icon";

const Language = ({ className, items }) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // hindari render sebelum client mount

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(className, styles.language, { [styles.active]: visible })}
      >
        <button
          className={styles.head}
          onClick={() => setVisible(!visible)}
        >
          <Icon name="globe" size="16" />
          <div className={styles.text}>Language</div>
        </button>
        <div className={styles.body}>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div
                className={cn(styles.item, { [styles.active]: index === 0 })}
                key={index}
              >
                <div className={styles.title}>{x.title}</div>
                <div className={styles.country}>{x.country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Language;

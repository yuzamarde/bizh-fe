"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.sass";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../../Icon";

const Dropdown = ({ className, items, setValue }) => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setVisible(false);
    setValue(false);
  };

  return (
    mounted && (
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <div
          className={cn(className, styles.dropdown, {
            [styles.active]: visible,
          })}
        >
          <button
            className={styles.head}
            onClick={() => setVisible(!visible)}
          >
            <div className={styles.text}>Travelers</div>
            <Icon name="arrow-down" size="24" />
          </button>

          <div className={styles.body}>
            {items.map((x, index) => (
              <Link
                href={x.url}
                key={index}
                className={cn(styles.item, {
                  [styles.active]: pathname === x.url,
                })}
                onClick={handleClick}
              >
                <Icon name={x.icon} size="24" />
                <div className={styles.text}>{x.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </OutsideClickHandler>
    )
  );
};

export default Dropdown;

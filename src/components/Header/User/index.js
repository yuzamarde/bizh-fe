"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";

const User = ({ className, items }) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mencegah render sampai client mount
  if (!mounted) return null;

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className, { [styles.active]: visible })}>
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          <img src="/images/content/avatar-2.jpg" alt="Avatar" />
        </button>
        <div className={styles.body}>
          <div className={styles.group}>
            {items.map((item, index) => (
              <div className={styles.menu} key={index}>
                {item.menu.map((x, idx) => (
                  <Link
                    href={x.url}
                    className={cn(styles.item, {
                      [styles.active]: pathname === x.url,
                    })}
                    onClick={() => setVisible(false)}
                    key={idx}
                  >
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="24" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.btns}>
            <Link
              href="/account-settings"
              className={cn("button button-small", styles.button, {
                [styles.active]: pathname === "/account-settings",
              })}
              onClick={() => setVisible(false)}
            >
              Account
            </Link>
            <button className={cn("button-stroke button-small", styles.button)}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default User;

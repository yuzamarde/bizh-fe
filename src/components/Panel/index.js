"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Panel.module.sass";
import Icon from "../Icon";

const navigation = [
  {
    title: "Stays",
    url: "/",
  },
  {
    title: "Flights",
    url: "/flights",
  },
  {
    title: "Cars",
    url: "/cars",
  },
  {
    title: "Things to do",
    url: "/things-to-do",
  },
];

const Panel = ({
  className,
  menu,
  classBody,
  children,
  onSearch,
  classButtonSearch,
}) => {
  const pathname = usePathname(); // untuk deteksi route aktif

  return (
    <div className={cn(className, styles.panel)}>
      <div className={styles.background}></div>
      {menu && (
        <div className={styles.nav}>
          {navigation.map((x, index) => (
            <Link
              href={x.url}
              key={index}
              className={cn(styles.link, {
                [styles.active]: pathname === x.url,
              })}
            >
              {x.title}
            </Link>
          ))}
        </div>
      )}
      <div className={cn(styles.body, classBody)}>
        {children}
        <button
          className={cn(classButtonSearch, styles.search)}
          onClick={onSearch}
        >
          <Icon name="search" size="24" />
        </button>
      </div>
    </div>
  );
};

export default Panel;

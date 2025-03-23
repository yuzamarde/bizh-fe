"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import Card from "./Card";

// data
import { catalogList } from "../../../mocks/catalog";

const dateOptions = ["Recently added", "Long added"];
const sortingOptions = catalogList.map((x) => x.title);

const Catalog = () => {
  const [date, setDate] = useState(dateOptions[0]);
  const [sorting, setSorting] = useState(sortingOptions[0]);

  const router = useRouter();

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn(styles.main__center, styles.container)}>
        <div className={styles.wrapper}>
          <h2 className={cn("h2", styles.title)}>Go somewhere</h2>
          <div className={cn("info", styles.info)}>
            Let’s go on an adventure
          </div>

          {/* Sorting Buttons */}
          <div className={styles.sorting}>
            <div className={styles.nav}>
              {catalogList.map((x, index) => {
                if (!x.items.length) return null;
                const firstItem = x.items[0];

                return (
                  <button
                    key={index}
                    className={cn(styles.link, {
                      [styles.active]: x.title === sorting,
                    })}
                    onClick={() => {
                      setSorting(x.title);
                      router.push(`/stays-product/${firstItem.slug}`);
                    }}
                  >
                    <Icon name={x.icon} size="16" />
                    {x.title}
                  </button>
                );
              })}
            </div>

            {/* Dropdown (Tablet) */}
            <div className={cn("tablet-show", styles.box)}>
              <Dropdown
                className={styles.dropdown}
                value={sorting}
                setValue={setSorting}
                options={sortingOptions}
              />
            </div>

            {/* Dropdown (Date Sorting) */}
            <div className={styles.box}>
              <Dropdown
                className={styles.dropdown}
                value={date}
                setValue={setDate}
                options={dateOptions}
              />
            </div>
          </div>

          {/* Cards */}
          <div className={styles.list}>
            {catalogList
              .find((x) => x.title === sorting)
              .items.map((x, index) => (
                <Card className={styles.card} item={x} key={index} />
              ))}
          </div>

          {/* View All Button */}
          <div className={styles.btns}>
            <button
              className={cn(styles.button__small, styles.button__stroke)}
              onClick={() => router.push("/stays-product")}
            >
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

import React from "react";
import cn from "classnames";
import styles from "./Description.module.sass";
import Link from "next/link";
import Icon from "../../../components/Icon";
import Details from "./Details";
import Receipt from "../../../components/Receipt";

const items = [
  {
    title: "May 15, 2024",
    category: "Check-in",
    icon: "calendar",
  },
  {
    title: "May 22, 2024",
    category: "Check-out",
    icon: "calendar",
  },
  {
    title: "2 guests",
    category: "Guest",
    icon: "user",
  },
];

const Description = ({
  classSection,
  description,
  availableService,
  priceOld,
  priceActual,
  discount,
  fee,
  reviews,
  rating,
  name,
  title,
  avatar,
  parametersUser,
}) => {
  // 💰 Hitung total
  const discountValue = parseFloat(discount?.replace("%", "") || "0") / 100;
  const priceActualNum = Number(priceActual) || 0;
  const feeNum = Number(fee) || 0;
  const total = priceActualNum - (priceActualNum * discountValue) + feeNum;

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn(styles.center, styles.container)}>
        <div className={styles.wrapper}>
          <Details
            className={styles.details}
            description={description}
            name={name}
            title={title}
            avatar={avatar}
            availableService={availableService}
          />
          <Receipt
            className={styles.receipt}
            items={items}
            description={description}
            priceOld={priceOld}
            priceActual={priceActual}
            discount={discount}
            avatar={avatar}
            fee={fee}
            rating={rating}
            reviews={reviews}
            parametersUser={parametersUser}
          >
            <div className={styles.btns}>
              <button
                className={cn(
                  styles.button__small,
                  styles.button__stroke,
                  styles.button
                )}
              >
                <span>Save</span>
                <Icon
                  name="plus"
                  size="16"
                  className={cn(styles.icon__arrow__left)}
                />
              </button>
              <Link
                className={cn(
                  styles.button__small,
                  styles.button__stroke__blue,
                  styles.button
                )}
                href="/stays-checkout"
              >
                <span>Reserve</span>
                <Icon
                  name="bag"
                  size="16"
                  className={cn(styles.icon__arrow__reserve)}
                />
              </Link>
            </div>
            <div className={styles.table}>
              <div className={styles.line}>
                <div className={styles.cell}>1 night</div>
                <div className={styles.cell}>
                  IDR {Number(priceActual).toLocaleString("id-ID")}
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.cell}>discount</div>
                <div className={styles.cell}>{discount}</div>
              </div>
              <div className={styles.line}>
                <div className={styles.cell}>fee</div>
                <div className={styles.cell}>
                  IDR {Number(fee).toLocaleString("id-ID")}
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.cell}>Total</div>
                <div className={styles.cell}>
                  IDR {total.toLocaleString("id-ID")}
                </div>
              </div>
            </div>
            <div className={styles.foot}>
              <button className={styles.report}>
                <Icon name="flag" size="12" />
                Report this property
              </button>
            </div>
          </Receipt>
        </div>
      </div>
    </div>
  );
};

export default Description;

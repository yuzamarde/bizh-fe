"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateRange.module.sass";
import Icon from "../Icon";

const DateRange = ({
  className,
  icon = "calendar", // default icon
  description,
  startDatePlaceholderText = "Start date",
  endDatePlaceholderText = "End date",
  displayFormat = "yyyy-MM-dd",
  small,
  bodyDown,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        className,
        { [styles.small]: small },
        { [styles.bodyDown]: bodyDown },
        styles.date
      )}
    >
      <div className={styles.head}>
        <div className={styles.list}>
          <div className={styles.box}>
            {icon && (
              <div className={styles.icon}>
                <Icon name={icon} size="24" />
              </div>
            )}
            {description && (
              <div className={styles.description}>{description}</div>
            )}
          </div>
        </div>

        <div className={styles.pickers}>
          {/* Start Date Picker */}
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              if (endDate && date > endDate) {
                setEndDate(null);
              }
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText={startDatePlaceholderText}
            dateFormat={displayFormat}
            className={styles.input}
            showPopperArrow={false}
          />

          {/* End Date Picker */}
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText={endDatePlaceholderText}
            dateFormat={displayFormat}
            className={styles.input}
            showPopperArrow={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DateRange;

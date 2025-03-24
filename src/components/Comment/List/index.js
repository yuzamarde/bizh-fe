"use client";
import React, { useState } from "react";
import cn from "classnames";
import styles from "./List.module.sass";
import Rating from "../../Rating";
import Dropdown from "../../Dropdown";
import Loader from "../../Loader";


const dateOptions = ["Newest", "Popular"];

const List = ({ comments = [] }) => {
  const [date, setDate] = useState(dateOptions[0]);

  return (
    <div className={styles.list}>
      <div className={styles.head}>
        <div className={styles.title}>3 comments</div>
        <Dropdown
          className={styles.dropdown}
          value={date}
          setValue={setDate}
          options={dateOptions}
        />
      </div>
      <div className={styles.group}>
        {comments.map((x, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.avatar}>
              <img src={x.avatar} alt="Avatar" />
            </div>
            <div className={styles.details}>
              <div className={styles.top}>
                <div className={styles.author}>{x.name}</div>
                <Rating
                  className={styles.rating}
                  readonly
                  initialRating={x.rating}
                />
              </div>
              <div className={styles.content}>{x.text}</div>
              <div className={styles.foot}>
                <div className={styles.time}>Just now</div>
                <div className={styles.actions}>
                  <button className={styles.action}>Like</button>
                  <button className={styles.action}>Reply</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn(styles.button__small, styles.button__stroke, styles.button)}>
          <Loader className={styles.loader} />
          <span>Loading comment</span>
        </button>
      </div>
    </div>
  );
};

export default List;

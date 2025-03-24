"use client";
import React, { useState } from "react";
import cn from "classnames";
import styles from "./CommentsProduct.module.sass";
import Profile from "../Profile";
import Comment from "../Comment";
import Icon from "../Icon";

const CommentsProduct = ({
  className,
  parametersUser,
  socials,
  info,
  buttonText,
  name,
  avatar,
  comments,
  rating,
  reviews
}) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn(styles.center, styles.container)}>
        <Profile
          className={styles.profile}
          parametersUser={parametersUser}
          info={info}
          socials={socials}
          buttonText={buttonText}
        >
          <div className={styles.line}>
            <div className={styles.avatar}>
              <img src={avatar} alt="Avatar" />
              <div className={styles.check}>
                <Icon name="check" size="12" />
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.man}>{name}</div>
              <div className={styles.rating}>
                <Icon name="star" size="20" />
                <div className={styles.number}>{rating}</div>
                <div className={styles.reviews}>{reviews}</div>
              </div>
            </div>
          </div>
        </Profile>
        <div className={styles.wrapper}>
          <Comment comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default CommentsProduct;

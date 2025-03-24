import React from "react";
import cn from "classnames";
import styles from "./Rating.module.sass";

const MAX_STARS = 5;

const Rating = ({ className, initialRating = 0, readonly = true }) => {
  const stars = [];

  for (let i = 1; i <= MAX_STARS; i++) {
    stars.push(
      <img
        key={i}
        src={
          i <= initialRating
            ? "/images/content/rating-star-fill.svg"
            : "/images/content/rating-star.svg"
        }
        alt={i <= initialRating ? "Full Star" : "Empty Star"}
        className={styles.star}
      />
    );
  }

  return <div className={cn(styles.rating, className)}>{stars}</div>;
};

export default Rating;

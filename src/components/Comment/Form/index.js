import React from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import Icon from "../../Icon";
import Rating from "../../Rating";

const Form = ({ className, onSubmit, value, setValue }) => {
  return (
    <form className={cn(styles.form, className)} action="" onSubmit={onSubmit}>
      <div className={styles.title}>Add a review</div>
      <div className={styles.head}>
        <div className={styles.text}>
          Be the first to review <span>Spectacular views of Queenstown</span>
        </div>
        <Rating className={styles.rating} initialRating="4" />
      </div>
      <div className={styles.field}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="comment"
          placeholder="Share your thoughts"
          required
        />
        <button className={styles.smile}>
          <Icon name="smile" size="24" />
        </button>
        <button className={cn(styles.button__small, styles.button__stroke, styles.button)}>
          <span>Post it!</span>
          <Icon name="arrow-next" size="14" className={cn(styles.icon__arrow__left)} />
        </button>
      </div>
    </form>
  );
};

export default Form;

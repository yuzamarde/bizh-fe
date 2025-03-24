import React from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Icon from "../../../../components/Icon";

const Details = ({
  className,
  description,
  name,
  avatar,
  availableService = [],
}) => {
  // Ambil data dari availableService[0].regulars[0]
  const regularService = availableService[0]?.regulars?.[0] || {};
  const parameters = regularService.rooms || [];
  const options = regularService.service || [];

  return (
    <div className={cn(className, styles.details)}>
      <h4 className={cn(styles.h4, styles.title)}>Private room in house</h4>

      <div className={styles.profile}>
        <span>Hosted by</span>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
        </div>
        <div className={styles.name}>{name}</div>
      </div>

      {/* Parameters (guest, bedroom, bath) */}
      <div className={styles.parameters}>
        {parameters.map((x, index) => (
          <div className={styles.parameter} key={index}>
            <Icon name={x.icon} size="20" />
            {x.title}
          </div>
        ))}
      </div>

      {/* Deskripsi */}
      <div className={styles.content}>{description}</div>

      {/* Amenities */}
      <div className={styles.info}>Amenities</div>
      <div className={styles.options}>
        {options.map((x, index) => (
          <div className={styles.option} key={index}>
            <Icon name={x.icon} size="24" />
            {x.title}
          </div>
        ))}
      </div>

      <button
        className={cn(styles.button__small, styles.button__stroke, styles.button)}
      >
        More detail
      </button>
    </div>
  );
};

export default Details;

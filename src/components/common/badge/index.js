import React from "react";
import styles from "./style.module.css";

const Badge = ({ text, ...restProps }) => {
  return (
    <div className={styles.badge} {...restProps}>
      {text}
    </div>
  );
};

export default Badge;

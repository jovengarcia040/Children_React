import { Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";

const Title = ({ children, required = false, type = "" }) => {
  return (
    <Typography className={`${type === "main" ? styles.main : styles.title}`}>
      {children} {required && <span className={styles.red}>*</span>}
    </Typography>
  );
};

export default Title;

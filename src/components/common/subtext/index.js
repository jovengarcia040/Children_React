import { Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";

const Subtext = ({ children }) => {
  return <Typography className={styles.subtext}>{children}</Typography>;
};

export default Subtext;

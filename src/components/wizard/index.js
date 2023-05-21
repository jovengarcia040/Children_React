import styles from "./style.module.css";
import { Box } from "@mui/material";
import React from "react";
import HorizontalLinearStepper from "../common/stepper";

const Wizard = () => {
  return (
    <Box className={styles.wrapper}>
      <HorizontalLinearStepper />
    </Box>
  );
};

export default Wizard;

import { Box, Grid, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Body from "../../../images/body.png";
import React from "react";
import styles from "./style.module.css";
import Title from "../../common/title";
import Subtext from "../../common/subtext";
import example from "../../../images/example.png";

const AddImages = () => {
  return (
    <Box>
      <div style={{ marginBottom: "12px" }}>
        <Title type="main">Add Images</Title>
        <Subtext>Add images according to this example</Subtext>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Title required={true} type="main">
          Example
        </Title>
        <img src={example} alt={example} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "13px" }}>
          <Title required={true} type="main">
            Add Images
          </Title>
          <Subtext>Choose the relevant images</Subtext>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.iconWrapper}>
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile"
              style={{ display: "none" }}
            />
            <label for="file">
              {" "}
              <AddCircleOutlineOutlinedIcon />
            </label>
          </div>
          <div>
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile"
              style={{ display: "none" }}
            />
            <label for="file">
              {" "}
              <img src={Body} alt={"body"} />
            </label>
          </div>
          <div className={styles.iconWrapper}>
            <input
              type="file"
              name="file"
              id="fil1e"
              class="inputfile"
              style={{ display: "none" }}
            />
            <label for="file1">
              {" "}
              <AddCircleOutlineOutlinedIcon />
            </label>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AddImages;

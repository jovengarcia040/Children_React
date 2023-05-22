import { Box, Grid, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Body from "../../../images/body.png";
import React from "react";
import styles from "./style.module.css";
import Title from "../../common/title";
import Subtext from "../../common/subtext";
import example from "../../../images/example.png";
import Badge from "../../common/badge";
import child from "../../../images/child.png";

const AddImages = () => {
  return (
    <Box>
      <div style={{ marginBottom: "12px" }}>
        <Title type="main">Add Images</Title>
        <Subtext>Add images according to this example</Subtext>
      </div>
      <div style={{ marginBottom: "40px", position: "relative" }}>
        <Title required={true} type="main">
          Example
        </Title>
        <img src={example} alt={"example"} />
        <img className={styles.childImage} src={child} alt="child" />
        <Badge
          style={{ position: "absolute", left: "30px", bottom: "-15px" }}
          text="Start Point"
        />
        <Badge
          style={{ position: "absolute", left: "222px", bottom: "-15px" }}
          text="Child Image"
        />
        <Badge
          style={{ position: "absolute", left: "424px", bottom: "-15px" }}
          text="End Point"
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
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
          <div style={{ position: "relative", cursor: "pointer" }}>
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile"
              style={{ display: "none" }}
            />
            <label for="file">
              {" "}
              <img style={{ cursor: "pointer" }} src={Body} alt={"body"} />
              <AddCircleOutlineOutlinedIcon className={styles.bodyPlus} />
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
            <label for="file">
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

import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../../common/title";
import Subtext from "../../common/subtext";
import styles from "./style.module.css";

const AddVideos = () => {
  return (
    <Box>
      <div style={{ marginBottom: "28px" }}>
        <Title type="main">Add Videos</Title>
        <Subtext>Add reinforcement videos</Subtext>
      </div>
      <div style={{ marginBottom: "28px" }}>
        <Title required="true">Add Video#1</Title>
        <div className={styles.icon}>
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
    </Box>
  );
};

export default AddVideos;

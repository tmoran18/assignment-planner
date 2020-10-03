import React from "react";
import styles from "../ColorPicker/ColorPicker.module.css";

const ColorPicker = () => {
  return (
    <div id={styles.colorPicker_container}>
      <input type="checkbox" id="blue" name="checkBlue"></input>
      <input type="checkbox" id="blue" name="checkBlue"></input>
    </div>
  );
};

export default ColorPicker;

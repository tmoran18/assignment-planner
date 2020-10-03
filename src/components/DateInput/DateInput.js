import React from "react";
import "../../global.css";
import styles from "./DateInput.module.css";

const DateInput = ({ label, name }) => {
  return (
    <div className="inputContainer">
      <label htmlFor="">{label}</label>
      <input type="date" name={name} />
    </div>
  );
};

export default DateInput;

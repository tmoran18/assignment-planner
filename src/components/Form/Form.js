import React from "react";
import TextInput from "../TextInput/TextInput";
import NumberInput from "../NumberInput/NumberInput";
import DateInput from "../DateInput/DateInput";
import ColorPicker from "../ColorPicker/ColorPicker";
import styles from "../Form/Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <TextInput label="Unit Title" placeHolder="Unit Title" name="unitTitle" />
      <DateInput label="Unit Start Date" name="unitStart" />
      <NumberInput label="Number of Weeks" placeHolder="0" name="numOfWeeks" />
      <ColorPicker />
    </form>
  );
};

export default Form;

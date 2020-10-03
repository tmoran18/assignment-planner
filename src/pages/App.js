import React, { useState } from "react";
import { format, compareAsc, startOfYear } from "date-fns";
import NumberInput from "../components/NumberInput/NumberInput";
import TextInput from "../components/TextInput/TextInput";
import DateInput from "../components/DateInput/DateInput";
import Form from "../components/Form/Form";
import "../global.css";

function App() {
  const [numOfUnits, setNumOfUnits] = useState(2);
  var result = startOfYear(new Date(2014, 8, 2));

  return (
    <div className="App">
      <section style={{ display: "flex", justifyContent: "center" }}>
        <NumberInput
          label="Number of Units"
          placeHolder="0"
          name="numOfUnits"
        />
      </section>

      <section id="form_container">
        {[...Array(numOfUnits)].map((i) => {
          return <Form key={i}>{i}</Form>;
        })}
      </section>
    </div>
  );
}

export default App;

// TODO's
// Creating a grid with indexed IDS based off state

// Components:
// Grid Container is the parent
// will create grid items by mapping state

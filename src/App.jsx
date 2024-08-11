import styles from "./App.module.css";
import Heading from "./components/Heading";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [value, setValue] = useState([]);

  const buttonValue = (e) => {
    let target = e.target.innerHTML;
    if (target === "AC") {
      setValue("");
    } else if (target === "=") {
      const result = eval(value);
      setValue(result);
    } else if (target === "DE") {
      let arr = value.toString();
      setValue(arr.slice(0, arr.length - 1));
    } else {
      setValue(value + e.target.innerHTML);
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <Heading />
        <Display display={value} />
        <Buttons buttonValue={buttonValue} />
      </div>
    </>
  );
}

export default App;

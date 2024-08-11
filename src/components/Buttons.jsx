import Button from "./Button";
import styles from "./Buttons.module.css";

const buttons = [
  "AC",
  "DE",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "00",
  "0",
  ".",
  "=",
];
const Buttons = ({ buttonValue }) => {
  return (
    <>
      <div className={styles.buttons}>
        {buttons.map((btn) => {
          return <Button key={btn} btnValue={btn} buttonValue={buttonValue} />;
        })}
      </div>
    </>
  );
};
export default Buttons;

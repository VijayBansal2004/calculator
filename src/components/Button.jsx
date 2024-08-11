import styles from "./Button.module.css";

const Button = ({ btnValue, buttonValue }) => {
  return (
    <>
      <button
        className={styles.button}
        onClick={(e) => {
          buttonValue(e);
        }}
      >
        {btnValue}
      </button>
    </>
  );
};
export default Button;

import styles from "./Display.module.css";

const Display = ({ display }) => {
  return (
    <>
      <div className={styles.display}>
        <input
          type="text"
          name="text"
          value={display}
          readOnly
          placeholder="0"
        />
      </div>
    </>
  );
};
export default Display;

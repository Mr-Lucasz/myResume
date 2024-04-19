
import styles from "./Button.module.css";
import props from "prop-types";

export function Button({ children, onClick }) {


  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: props.node,
  onClick: props.func,
};

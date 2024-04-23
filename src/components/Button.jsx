import styles from "./Button.module.css";
import PropTypes from "prop-types";
export function Button({ children, onClick }) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles["btn-6"]}>
        <span>{children}</span>
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

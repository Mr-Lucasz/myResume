
import styles from "./Button.module.css";
import PropTypes from "prop-types";
export function Button({ children, onClick }) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        <svg width="180px" height="60px" viewBox="0 0 180 60" className={styles.svgBorder}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" className={styles.bgLine} />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className={styles.hlLine} />
        </svg>
        <span>{children}</span>
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
import welcome from "../assets/welcome.mp4";
import props from "prop-types";
import styles from "./LoadingScreen.module.css";

export function LoadingScreen({ onVideoEnd }) {
  return (
    <div className={styles.loadingContainer}>
      <video
        className={styles.video}
        autoPlay
        onEnded={onVideoEnd}
        muted
        playsInline
      >
        <source src={welcome} type="video/mp4" />
      </video>
    </div>
  );
}

LoadingScreen.propTypes = {
  onVideoEnd: props.func,
};
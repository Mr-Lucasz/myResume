import welcome from "../assets/welcome.mp4";
import props from "prop-types";
import styles from "./LoadingScreen.module.css";

export function LoadingScreen({ onVideoEnd, videoRef }) {
  return (
    <div className={styles.loadingContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        onEnded={onVideoEnd}
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

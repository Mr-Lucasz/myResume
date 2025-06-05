import welcome from "../assets/welcome.webm";
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
        <source src={welcome} type="video/webm" />
      </video>
    </div>
  );
}

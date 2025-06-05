import { useRef } from "react";
import { useThreeScene } from "./Background/useThreeScene";
import props from "prop-types";
import styles from "./Background.module.css";

export function Background({ children }) {
  const mount = useRef(null);
  useThreeScene(mount);
  return (
    <div
      ref={mount}
      style={{ width: "100%", height: "100vh" }}
      className={styles.divBackground}
    >
      {children}
    </div>
  );
}

Background.propTypes = {
  children: props.node,
};

// LoadingScreen.jsx
import welcome from "../assets/welcome.mp4";
import props from "prop-types";


export function LoadingScreen({ onVideoEnd }) {
  return (
    <div className="loading-container">
      <video autoPlay onEnded={onVideoEnd}>
        <source src={welcome} type="video/mp4" />
      </video>
    </div>
  );
}

LoadingScreen.propTypes = {
  onVideoEnd: props.func,
};
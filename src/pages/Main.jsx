import logotipo from "../assets/logotipo-lucas-rodrigues.svg";
import Background from "../components/Background";

export function Main() {
  return (
    <div>

      <img src={logotipo} alt="Logotipo Lucas Rodrigues" />
      <h1>Main</h1>
      <Background />
    </div>
  );
}

import "../App.css";
import photogrid from "../assets/photogrid.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={photogrid}></img>
      <h2>Online Experiences</h2>
      <h3>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h3>
    </div>
  );
}

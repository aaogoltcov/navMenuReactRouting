import { Link } from "react-router-dom";

export default function Menu() {
  return (
      <div className="menu">
        <Link to="/" className="menu__item">Главная</Link>
        <Link to="/drift" className="menu__item">Дрифт-такси</Link>
        <Link to="/timeattack" className="menu__item">Time-Attack</Link>
        <Link to="/forza" className="menu__item">Forza Karting</Link>
      </div>
  );
}

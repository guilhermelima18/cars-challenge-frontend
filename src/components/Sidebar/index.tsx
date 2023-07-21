import { Link } from "react-router-dom";
import minLogo from "../../assets/minLogo.svg";
import homeIcon from "../../assets/homeIcon.svg";
import carIcon from "../../assets/carIcon.svg";
import styles from "./styles.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={minLogo} alt="Logo da RentX" />
          </Link>
        </div>

        <div className={styles.menu}>
          <Link to="/home">
            <img src={homeIcon} alt="Ícone de uma casa" />
          </Link>
          <Link to="/register-car">
            <img src={carIcon} alt="Ícone de um carro" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.svg";
import carImg from "./assets/car.svg";
import styles from "./styles/app.module.css";

export default function App() {
  const navigate = useNavigate();

  const handleRedirectHomeURL = () => {
    navigate("/home");
  };

  return (
    <main className={styles.container}>
      <section className={styles.sectionWelcome}>
        <img src={logo} alt="Logo da RentX" />

        <h1 data-testid="text-main">
          Visualize um <br />
          carro de maneira <br />
          simples e fácil
        </h1>

        <h4 data-testid="text-secondary">
          Vários modelos para você dirigir <br />
          seguro, com conforto e segurança.
        </h4>

        <Button
          data-testid="btn-init"
          variant="danger"
          onClick={handleRedirectHomeURL}
        >
          Começar agora
        </Button>
      </section>

      <section className={styles.sectionCar}>
        <img src={carImg} alt="Carro branco da Audi" />
      </section>
    </main>
  );
}

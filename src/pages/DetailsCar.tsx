import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCars } from "../hooks/useCars";
import { CardDetails } from "../components/CardDetails";
import { SpinnerLoading } from "../components/SpinnerLoading";
import styles from "../styles/detailsCar.module.css";

export default function DetailsCar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { car, getCarLoading, getCar } = useCars();

  const handleRedirectHomeURL = () => {
    navigate("/home");
  };

  useEffect(() => {
    if (id) {
      getCar(id as string);
    }
  }, [id, getCar]);

  if (getCarLoading) {
    return <SpinnerLoading />;
  }

  return (
    <main className={styles.content}>
      <section className={styles.sectionImg}>
        <img src={car?.imageUrl} alt={car?.model} />
      </section>

      <section className={styles.sectionAboutCar}>
        <div className={styles.boxInfoCar}>
          <CardDetails title="Marca" text={car?.brand} />

          <CardDetails title="Modelo" text={car?.model} />
        </div>

        <div className={styles.boxInfoCar}>
          <CardDetails title="Ano" text={car?.year} />

          <CardDetails title="Placa" text={car?.plate} />
        </div>

        <div className={styles.boxAboutCar}>
          <h3>SOBRE O CARRO</h3>
          <p>{car?.description}</p>
        </div>

        <Button variant="danger" onClick={handleRedirectHomeURL}>
          Ver lista de veículos
        </Button>
      </section>
    </main>
  );
}

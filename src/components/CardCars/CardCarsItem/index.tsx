import { Button, Card } from "react-bootstrap";
import { CardCarsItemProps } from "./types";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const CardCarsItem = ({ car }: CardCarsItemProps) => {
  return (
    <Card className={styles.cardContent}>
      <Link to={`/details-car/${car.id}`}>
        <div className={styles.cardImg}>
          <Card.Img src={car.imageUrl} alt={car.model} />
        </div>
        <Card.Body>
          <div className={styles.cardHeader}>
            <Card.Title>
              {car.brand} - {car.model}
            </Card.Title>
            <Card.Title>{car.year}</Card.Title>
            <Button data-testid="btn-details" variant="danger">
              Detalhes
            </Button>
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Placa: {car.plate}</small>
        </Card.Footer>
      </Link>
    </Card>
  );
};

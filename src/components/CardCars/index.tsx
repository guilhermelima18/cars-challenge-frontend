import { CardCarsItem } from "./CardCarsItem";
import { CardCarsProps } from "./types";
import styles from "./styles.module.css";

export const CardCars = ({ cars }: CardCarsProps) => {
  return (
    <div className={styles.card}>
      {cars?.map((car) => (
        <CardCarsItem key={car.id} car={car} />
      ))}
    </div>
  );
};

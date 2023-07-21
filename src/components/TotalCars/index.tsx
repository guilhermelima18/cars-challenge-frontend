import { TotalCarsProps } from "./types";
import styles from "./styles.module.css";

export const TotalCars = ({ total }: TotalCarsProps) => {
  return (
    <div className={styles.wrapper}>
      <h2>Carros disponíveis</h2>
      <span>Total: {total} carros</span>
    </div>
  );
};

import { CardDetailsProps } from "./types";
import styles from "./styles.module.css";

export const CardDetails = ({ title, text }: CardDetailsProps) => {
  return (
    <div data-testid="card-car-info" className={styles.cardWrapper}>
      <span>{title}</span>
      <span className={styles.cardText}>{text}</span>
    </div>
  );
};

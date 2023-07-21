import { useEffect } from "react";
import { useCars } from "../hooks/useCars";
import { CardCars } from "../components/CardCars";
import { TotalCars } from "../components/TotalCars";
import { SpinnerLoading } from "../components/SpinnerLoading";
import styles from "../styles/home.module.css";

export default function Home() {
  const { cars, getCarsLoading, getCars } = useCars();

  const totalCars = cars?.length;

  useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <main className={styles.content}>
      {!!cars.length && <TotalCars total={totalCars} />}

      {getCarsLoading ? <SpinnerLoading /> : <CardCars cars={cars} />}
    </main>
  );
}

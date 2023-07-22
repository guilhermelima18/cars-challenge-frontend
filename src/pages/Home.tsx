import { useEffect, useState } from "react";
import { useCars } from "../hooks/useCars";
import { CardCars } from "../components/CardCars";
import { TotalCars } from "../components/TotalCars";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { Pagination } from "../components/Pagination";
import styles from "../styles/home.module.css";

export default function Home() {
  const { cars, totalCars, getCarsLoading, getCars } = useCars();

  const [page, setPage] = useState(1);

  useEffect(() => {
    getCars(page);
  }, [page, getCars]);

  return (
    <main className={styles.content}>
      {!!cars.length && <TotalCars total={totalCars!} />}

      {getCarsLoading ? (
        <SpinnerLoading />
      ) : (
        <>
          <CardCars cars={cars} />
          <Pagination
            currentPage={page}
            registerPerPage={6}
            totalCountOfRegisters={totalCars!}
            onPageChange={setPage}
          />
        </>
      )}
    </main>
  );
}

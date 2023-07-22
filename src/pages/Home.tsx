import { ChangeEvent, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { useCars } from "../hooks/useCars";
import { CardCars } from "../components/CardCars";
import { TotalCars } from "../components/TotalCars";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { Pagination } from "../components/Pagination";
import styles from "../styles/home.module.css";
import { InputSearch } from "../components/InputSearch";

export default function Home() {
  const { cars, totalCars, getCarsLoading, getCars } = useCars();

  const [page, setPage] = useState(1);

  const handleInputSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    debouncedSearch(value);
  };

  const debouncedSearch = useRef(
    debounce(async (value) => {
      getCars(page, await value);
    }, 500)
  ).current;

  useEffect(() => {
    getCars(page);
  }, [page, getCars]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <main className={styles.content}>
      {!!cars.length && <TotalCars total={totalCars!} />}

      {getCarsLoading ? (
        <SpinnerLoading />
      ) : (
        <>
          <InputSearch onChange={handleInputSearchChange} />
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

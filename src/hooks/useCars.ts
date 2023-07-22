import { useCallback, useState } from "react";
import { api } from "../libs/api";
import { Cars } from "../types/cars";

type RegisterCarProps = {
  imageUrl?: string | null;
  brand: string;
  model: string;
  year: string;
  plate: string;
  description: string;
};

export function useCars() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [car, setCar] = useState<Cars>();
  const [totalCars, setTotalCars] = useState<number>();
  const [getCarsLoading, setGetCarsLoading] = useState(false);
  const [getCarLoading, setGetCarLoading] = useState(false);
  const [registerCarLoading, setRegisterCarLoading] = useState(false);

  const getCars = useCallback(async (page: number = 1) => {
    try {
      setGetCarsLoading(true);
      const response = await api.get(`/cars?_page=${page}`);

      if (response.status === 200) {
        const total = Number(response.headers["x-total-count"]);

        setCars(response.data);
        setTotalCars(total);
      }
    } catch {
      throw new Error();
    } finally {
      setGetCarsLoading(false);
    }
  }, []);

  const getCar = useCallback(async (carId: string) => {
    try {
      setGetCarLoading(true);
      const response = await api.get(`/cars/${carId}`);

      if (response.status === 200) {
        setCar(response.data);
      }
    } catch {
      throw new Error();
    } finally {
      setGetCarLoading(false);
    }
  }, []);

  const registerCar = useCallback(async (car: RegisterCarProps) => {
    try {
      setRegisterCarLoading(true);
      const response = await api.post("/cars", { ...car });

      return response;
    } catch {
      throw new Error();
    } finally {
      setRegisterCarLoading(false);
    }
  }, []);

  return {
    cars,
    car,
    totalCars,
    getCarsLoading,
    getCarLoading,
    registerCarLoading,
    getCars,
    getCar,
    registerCar,
  };
}

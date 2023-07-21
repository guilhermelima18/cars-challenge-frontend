import { useCallback, useState } from "react";
import { api } from "../libs/api";
import { Cars } from "../types/cars";

type CreateCarProps = {
  imageUrl?: string | null;
  brand: string;
  model: string;
  year: string;
  plate: string;
  description: string;
};

export function useCars() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [getCarsLoading, setGetCarsLoading] = useState(false);
  const [registerCarLoading, setRegisterCarLoading] = useState(false);

  const getCars = useCallback(async () => {
    try {
      setGetCarsLoading(true);
      const response = await api.get("/cars");

      if (response.status === 200) {
        setCars(response.data);
      }
    } catch (error) {
      throw new Error();
    } finally {
      setGetCarsLoading(false);
    }
  }, []);

  const registerCar = useCallback(async (car: CreateCarProps) => {
    try {
      setRegisterCarLoading(true);
      const response = await api.post("/cars", { ...car });

      return response;
    } catch (error) {
      throw new Error();
    } finally {
      setRegisterCarLoading(false);
    }
  }, []);

  return {
    cars,
    getCarsLoading,
    registerCarLoading,
    getCars,
    registerCar,
  };
}

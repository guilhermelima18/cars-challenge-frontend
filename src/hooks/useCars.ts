import { useCallback, useState } from "react";
import { api } from "../libs/api";
import { Cars } from "../types/cars";

export function useCars() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [loading, setLoading] = useState(false);

  const getCars = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("/cars");

      if (response.status === 200) {
        setCars(response.data);
      }
    } catch (error) {
      throw new Error();
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    cars,
    loading,
    getCars,
  };
}

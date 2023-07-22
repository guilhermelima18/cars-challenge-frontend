export type Cars = {
  id: string;
  imageUrl: string;
  brand: string;
  model: string;
  plate: string;
  year: string;
  description: string;
  assessment: "Excelente" | "Bom" | "Ruim";
};

export type RegisterCarProps = {
  brand: string;
  model: string;
  year: number;
  plate: string;
  description: string;
};

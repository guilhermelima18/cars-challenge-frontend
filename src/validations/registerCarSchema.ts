import * as yup from "yup";

export const registerCarSchema = yup.object({
  brand: yup.string().required("Marca do veículo é obrigatório."),
  model: yup.string().required("Modelo do veículo é obrigatório."),
  year: yup
    .number()
    .positive("Deve ser um número positivo.")
    .required("Ano do veículo é obrigatório."),
  plate: yup
    .string()
    .required("Placa do veículo é obrigatório.")
    .length(8, "Deve ter somente 8 dígitos incluindo o traço."),
  description: yup.string().required("Descrição do veículo é obrigatório."),
});

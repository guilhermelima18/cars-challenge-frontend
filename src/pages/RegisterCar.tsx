import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { Button, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../libs/api";
import { useCars } from "../hooks/useCars";
import { ImagePreview } from "../components/ImagePreview";
import { Input } from "../components/Input";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { UPLOAD_IMGBB_URL } from "../helpers/constants";
import { registerCarSchema } from "../validations/registerCarSchema";
import { RegisterCarProps } from "../types/cars";
import styles from "../styles/registerCar.module.css";

type ImageProps = {
  preview: string;
  raw: File;
};

export default function RegisterCar() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCarProps>({
    resolver: yupResolver(registerCarSchema),
    mode: "onChange",
  });

  const { registerCar, registerCarLoading } = useCars();

  const navigate = useNavigate();

  const [image, setImage] = useState<ImageProps>();
  const [uploadImage, setUploadImage] = useState(null);
  const [assessment, setAssessment] = useState<string>();

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files![0];

    setImage({
      preview: URL.createObjectURL(imageFile),
      raw: imageFile,
    });

    const response = await api.post(
      UPLOAD_IMGBB_URL,
      {
        image: imageFile,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response) {
      setUploadImage(response?.data?.data?.url);
    }
  };

  const handleRadioChecked = (label: string) => {
    setAssessment(label);
  };

  const onFormSubmit = async (data: RegisterCarProps) => {
    const body = {
      id: uuidV4(),
      imageUrl: uploadImage || "",
      brand: data.brand,
      model: data.model,
      plate: data.plate,
      year: String(data.year),
      description: data.description,
      assessment,
    };

    const response = await registerCar(body);

    if (response.data) {
      navigate("/home");
    }
  };

  return (
    <div className={styles.content}>
      <h1>Cadastre seu veículo aqui</h1>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        {image?.preview && (
          <ImagePreview imageUrl={image.preview} imageName={image.raw.name} />
        )}
        <Form.Group className="mb-3">
          <Form.Label>Imagem do veículo</Form.Label>
          <Form.Control type="file" id="img" onChange={handleImageChange} />
        </Form.Group>
        <Input
          type="text"
          name="brand"
          label="Marca do veículo"
          control={control}
          maxLength={100}
          error={errors?.brand?.message}
        />
        <Input
          type="text"
          name="model"
          label="Modelo do veículo"
          control={control}
          maxLength={100}
          error={errors?.model?.message}
        />
        <Input
          type="text"
          name="year"
          label="Ano do veículo"
          control={control}
          maxLength={4}
          error={errors?.year?.message}
        />
        <Input
          type="text"
          name="plate"
          label="Placa do veículo"
          control={control}
          maxLength={8}
          error={errors?.plate?.message}
        />
        <Input
          type="text"
          name="description"
          label="Descrição do veículo"
          control={control}
          maxLength={250}
          error={errors?.description?.message}
        />

        <Form.Group className="mb-3 d-flex gap-3">
          <Form.Label>Avaliação do veículo:</Form.Label>
          <Form.Check
            type="radio"
            name="assessment"
            label="Ruim"
            value={assessment}
            onChange={() => handleRadioChecked("Ruim")}
          />
          <Form.Check
            type="radio"
            name="assessment"
            label="Bom"
            value={assessment}
            onChange={() => handleRadioChecked("Bom")}
          />
          <Form.Check
            type="radio"
            name="assessment"
            label="Excelente"
            value={assessment}
            onChange={() => handleRadioChecked("Excelente")}
          />
        </Form.Group>
        <Button
          className={styles.registerButton}
          type="submit"
          disabled={registerCarLoading}
        >
          {registerCarLoading ? <SpinnerLoading /> : "Cadastrar veículo"}
        </Button>
      </Form>
    </div>
  );
}

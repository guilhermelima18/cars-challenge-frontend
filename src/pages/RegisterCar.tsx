import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { Button, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { api } from "../libs/api";
import { useCars } from "../hooks/useCars";
import { ImagePreview } from "../components/ImagePreview";
import { Input } from "../components/Input";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { UPLOAD_IMGBB_URL } from "../helpers/constants";
import { registerCarSchema } from "../validations/registerCarSchema";
import { RegisterCarProps } from "../types/cars";
import styles from "../styles/registerCar.module.css";

const MySwal = withReactContent(Swal);

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
      MySwal.fire({
        title: "Sucesso!",
        text: `Veículo ${data.brand} - ${data.model} cadastrado.`,
        confirmButtonText: "Ok, continuar",
        confirmButtonColor: "#e31414",
        confirmButtonAriaLabel: "btn-confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/home");
        }
      });
    }
  };

  return (
    <div className={styles.content}>
      <section className={styles.sectionForm}>
        <h1>Cadastre seu veículo aqui</h1>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Imagem do veículo</Form.Label>
            <Form.Control
              data-testid="input-file"
              type="file"
              id="img"
              onChange={handleImageChange}
            />
          </Form.Group>
          <Input
            dataTesId="input-brand"
            type="text"
            name="brand"
            label="Marca do veículo"
            control={control}
            maxLength={100}
            error={errors?.brand?.message}
          />
          <Input
            dataTesId="input-model"
            type="text"
            name="model"
            label="Modelo do veículo"
            control={control}
            maxLength={100}
            error={errors?.model?.message}
          />
          <Input
            dataTesId="input-year"
            type="text"
            name="year"
            label="Ano do veículo"
            control={control}
            maxLength={4}
            error={errors?.year?.message}
          />
          <Input
            dataTesId="input-plate"
            type="text"
            name="plate"
            label="Placa do veículo"
            control={control}
            maxLength={8}
            error={errors?.plate?.message}
          />
          <Input
            dataTesId="input-description"
            type="text"
            name="description"
            label="Descrição do veículo"
            control={control}
            maxLength={1000}
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
            data-testid="btn-register"
            variant="danger"
            className={styles.registerButton}
            type="submit"
            disabled={registerCarLoading}
          >
            {registerCarLoading ? <SpinnerLoading /> : "Cadastrar veículo"}
          </Button>
        </Form>
      </section>

      {image?.preview && (
        <ImagePreview imageUrl={image.preview} imageName={image.raw.name} />
      )}
    </div>
  );
}

import { Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import { InputProps } from "./types";

export const Input = ({
  control,
  type,
  name,
  label,
  maxLength = 50,
  error,
}: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type={type}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            placeholder="name@example.com"
          />
          {!!error && (
            <Form.Label style={{ color: "red", fontSize: "0.9rem" }}>
              {error}
            </Form.Label>
          )}
        </Form.Group>
      )}
    />
  );
};

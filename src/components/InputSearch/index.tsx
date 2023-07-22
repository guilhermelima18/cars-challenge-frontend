import { Form, InputGroup } from "react-bootstrap";
import searchIcon from "../../assets/search.png";
import { InputSearchProps } from "./types";

export const InputSearch = ({ onChange }: InputSearchProps) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">
        <img src={searchIcon} alt="Ícone de busca" style={{ width: "1rem" }} />
      </InputGroup.Text>
      <Form.Control onChange={onChange} />
    </InputGroup>
  );
};

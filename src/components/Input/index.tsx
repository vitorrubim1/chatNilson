import React, { InputHTMLAttributes } from "react";
import { Field } from "formik";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: "nomeSobrenome" | "cidadadeEstado" | "dataNascimento" | "email";
  hasError?: boolean;
}

const InputField: React.FC<InputProps> = ({ name, hasError, ...rest }) => {
  return (
    <Container>
      <div>
        <Field name={name} type="string" {...rest} />
      </div>
      {/* <span>Aqui terá um erro</span> */}
    </Container>
  );
};

export default InputField;

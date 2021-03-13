import React, { InputHTMLAttributes, useCallback } from "react";
import { Field } from "formik";

import { date } from "./mask";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: "nomeSobrenome" | "cidadeEstado" | "dataNascimento" | "email";
  mask?: "date";
}

const InputField: React.FC<InputProps> = ({ name, value, mask, ...rest }) => {
  const handleKeyUp = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      if (mask === "date") {
        date(event, 10);
      }
    },
    [mask]
  );

  return (
    <Container>
      <Field
        name={name}
        type="string"
        onKeyUp={handleKeyUp}
        autoFocus={true}
        {...rest}
      />
    </Container>
  );
};

export default InputField;

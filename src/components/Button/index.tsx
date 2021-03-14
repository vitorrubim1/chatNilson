import React, { ButtonHTMLAttributes } from "react";

import { SendIcon } from "../../styles/Icons";
import { FormButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ type, ...rest }) => {
  return (
    <FormButton type={type} {...rest}>
      Enviar <SendIcon />
    </FormButton>
  );
};

export default Button;

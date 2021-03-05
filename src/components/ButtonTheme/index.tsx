import React from "react";

import { BulbFillIcon } from "../../styles/Icons";
import { Container } from "./styles";

interface Props {
  handleChangeTheme: () => void;
  theme: string;
}

const ButtonTheme: React.FC<Props> = ({ handleChangeTheme, theme }) => {
  return (
    <Container>
      {theme === "light" ? (
        <BulbFillIcon size={35} onClick={handleChangeTheme} />
      ) : (
        <BulbFillIcon size={35} onClick={handleChangeTheme} />
      )}
    </Container>
  );
};

export default ButtonTheme;

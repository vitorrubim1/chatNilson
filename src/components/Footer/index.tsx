import React from "react";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <p>© Todos direitos reservados</p>
      <p>
        Feito com 💜 por  {""}
        <strong>
          <a href="https://github.com/vitorrubim1" target="_blank" rel="noreferrer">
            Vitor Rubim
          </a>
        </strong>
      </p>
    </Container>
  );
};

export default Footer;

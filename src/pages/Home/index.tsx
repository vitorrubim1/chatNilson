import React from "react";
import { Link } from "react-router-dom";

import { Container, Background } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Falar com o ChatNilson... </h1>
        <Link to="/chat">Entrar no chat</Link>
      </div>
      <Background />
    </Container>
  );
};

export default Home;

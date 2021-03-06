import styled from "styled-components";
import { darken } from "polished";

import ChatBackgroundImg from "../../assets/imageChat.svg";

export const Container = styled.div`
  display: flex;

  max-width: 63.7rem;
  margin: 0 auto;
  padding: 7.0rem; //100px

  div {
    h1 {
      margin-bottom: 3.3rem;
    }

    a {
      padding: 1rem 1.34rem;

      background: ${props => props.theme.colors.primary};
      color: white;
      font-weight: bold;

      border-radius: 0.3rem;
      transition: background 200ms;
    }

    a:hover {
      background: ${darken(0.03, '#544bf7')};
    }
  }
`;

export const Background = styled.div`
  height: 30rem;
  width: 100%;

  background: url(${ChatBackgroundImg}) no-repeat center;
  background-size: cover; //pra cobrir todo espaço disponivel com a imagem
`;

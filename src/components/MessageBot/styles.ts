import styled, { css } from "styled-components";

import AvatarImageBlack from "../../assets/smileBlack.svg";
import AvatarImageWhite from "../../assets/smileWhite.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100px;
  margin-bottom: 1rem;
`;

export const Avatar = styled.div`
  height: 50px;
  width: 50px;

  border-radius: 50%;
  margin: 0 10px;

  ${(props) =>
    props.theme.title === "dark" &&
    css`
      background: url(${AvatarImageWhite}) no-repeat center;
    `}

  ${(props) =>
    props.theme.title === "light" &&
    css`
      background: url(${AvatarImageBlack}) no-repeat center;
    `}

  background-size: cover;
`;

export const TextMessage = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  height: auto;

  span {   
    min-width: 23rem;
    width: 23rem;

    padding: 0.8rem;
    margin-top: 1rem;
    
    font-size: 1.1rem;
    line-height: 1.4rem;
    flex-wrap: wrap;

    border-radius: 0 1rem 1rem 1rem;
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;
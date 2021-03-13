import styled from "styled-components";
import { darken } from "polished";

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${(props) => props.theme.colors.primary};
  color: white;
  font-weight: bold;

  width: 90px;
  padding: 9px;
  border: 0;
  border-radius: 3px;

  transition: background 200ms;
  &:hover {
    background: ${darken(0.03, '#544bf7')};
  }
`;

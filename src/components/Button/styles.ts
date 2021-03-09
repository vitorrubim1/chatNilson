import styled from "styled-components";

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
`;

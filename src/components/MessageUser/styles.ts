import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  align-items: center;

  height: 7rem;
`;

export const MessageContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0.6rem;

  height: auto;
  min-width: 23rem;
  padding: 0.8rem;

  border-radius: 1rem 1rem 0 1rem;
  background: ${(props) => props.theme.colors.quaternary};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

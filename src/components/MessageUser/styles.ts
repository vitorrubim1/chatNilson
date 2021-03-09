import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 7rem;
`;

export const MessageContainer = styled.div`
  position: absolute;
  right: 1rem;
  display: flex;

  height: auto;

  display: flex;

    min-width: 23.34rem;
    padding: 0.8rem;

    border-radius: 10px 10px 0 10px;
    background: ${(props) => props.theme.colors.quaternary};

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        padding: 10px 16px;
        background: transparent;
        color: white;

        margin-right: 15px;

        border: 0.1px solid #333333;
        border-radius: 5px;
      }
    }
`;

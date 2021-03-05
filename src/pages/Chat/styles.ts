import styled from "styled-components";

export const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2.67rem 1.335rem;

  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatMessages = styled.div`
  position: relative; //pq o user é absolute

  margin-top: 30px;
  padding-top: 20px;

  width: 70%;
  height: 100%;

  background: ${(props) => props.theme.colors.secondary};

  border-radius: 8px;

  //scrollbar
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.quaternary};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

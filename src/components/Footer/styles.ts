import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  width: 350px;
  padding: 20px 0;

  border-top: 1px solid var(--color-gray);

  p {
    line-height: 23px;

    strong {
      color: var(--color-purple);
    }
  }
`;

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

  width: 23.35rem;
  padding: 1.335rem 0;

  border-top: 0.5px solid #e6e6e657;

  p {
    line-height: 1.54rem;

    strong a{
      color: ${props => props.theme.colors.primary} !important;
    }
  }
`;

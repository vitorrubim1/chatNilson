import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  right: 0;

  margin: 2.5rem 3.33rem 0 0;

  border: none;

  transform: rotate(180deg);

  background: transparent;

  > svg {
    color: ${props => props.theme.colors.text};
  }
`;

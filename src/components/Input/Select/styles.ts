import styled from "styled-components";
import Select from "react-select";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > span {
    margin: 8px;
    font-size: 1.3rem;
  }
`;

export const ReactSelect = styled(Select)`
  .react-select__control {
    background: transparent;
    color: white;

    margin-right: 1rem;

    border: 0.1px solid #333333;
    border-radius: 5px;

    height: 2.6rem;
    width: 100%;
    min-width: 15rem;
    max-width: 17rem;
    font-size: 1.01rem;
    color: white;
  }


  .react-select__input {
    color: white;
  }
  .react-select__single-value,
  .react-select__placeholder {
    color: #737373;
  }
  .react-select__menu-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .react-select__option {
    font-size: 1rem;
    height: 50px;
    cursor: pointer;

    transition: all 200ms;
  }

  .react-select__option:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }

  .react-select__option--is-focused {
    background-color: ${(props) => props.theme.colors.primary} !important;
    color: white;
  }

  .react-select__option--is-selected {
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
  }
`;

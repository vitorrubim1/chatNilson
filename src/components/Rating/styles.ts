import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  > div {
    width: 100%;

    position: absolute;
    top: 50%;

    display: flex;
    left: 35%;

    transform: translate(-50%, -50%) rotateY(180deg);

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    label {
      display: block;
      cursor: pointer;
      width: 50px;

      transition: color 200ms;
    }

    label:before {
      content: "★";
      position: relative;
      font-size: 50px;
      color: white;
    }

    label:after {
      content: "★";
      display: block;
      font-size: 50px;
      color: ${(props) => props.theme.colors.primary};

      position: absolute;
      top: 0;

      opacity: 0;
      transition: opacity 200ms;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    }

    label:hover:after,
    label:hover ~ label:after,
    input:checked ~ label:after {
      opacity: 1;
    }
  }
`;

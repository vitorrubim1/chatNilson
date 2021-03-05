import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 8rem;
  margin: 1rem;
`;


export const TextMessage = styled.div`
  position: absolute;
  right: 1rem;
  display: flex;

  height: auto;

  span {   
    width: 23.34rem;

    padding: 0.8rem;
    margin-top: 1rem;
    
    font-size: 1.1rem;
    line-height: 1.4rem;
    flex-wrap: wrap;

    border-radius: 10px 10px 0 10px;
    background: ${props => props.theme.colors.quaternary};
    color: white;
  }
`;
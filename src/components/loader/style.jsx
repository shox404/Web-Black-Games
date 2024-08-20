import styled from "styled-components";

export const Block = styled.div`
  background: #1e1e1e;
  height: 100vh;
  width: 100%;
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: -37.5px -37.5px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: transparent;
    border: 4px solid #222;
    border-top-color: #009688;
    border-bottom-color: #009688;
    animation: 1s spin linear infinite;
  }
  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

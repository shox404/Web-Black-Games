import styled from "styled-components";

export const GameCard = styled.div`
  margin: 20px 0;
  height: 400px;
  width: 250px;
  border-radius: 5px;
  background: #212121;
  box-shadow: 15px 15px 30px #191919, -15px -15px 30px #292929;
  color: white;
  overflow: hidden;
  &:hover {
    transform: translateY(-20px) !important;
  }
  img {
    width: 100%;
  }
  .text {
    width: 100%;
    height: 400px;
    padding: 20px;
    p {
      height: 50px;
      margin: 10px 0;
    }
    button {
      position: relative;
      bottom: 0;
      outline: none;
      border: none;
      background: #313131;
      border-radius: 5px;
      height: 40px;
      color: white;
      width: 150px;
    }
    h4 {
      height: 70px;
      color: white;
    }
  }
`;

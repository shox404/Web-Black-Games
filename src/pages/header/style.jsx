import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(90deg, rgb(0, 0, 0, 0.9), rgb(0, 0, 0, 0)),
    url(${(props) => props.backImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  .infos {
    width: 90%;
    height: 30vh;
    margin: auto;
    button {
      height: 40px;
      width: 150px;
      border: none;
      outline: none;
      border-radius: 5px;
      background: #fff;
      color: black;
    }
    h1,
    h4 {
      color: white;
    }
  }
  &::before {
    content: "";
    transition: 0.5s;
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(transparent, #21212180, #21212190, #212121);
  }
  @media screen and (max-width: 550px) {
    height: 150vh;
    align-items: none;
    .infos {
      width: 90%;
      position: absolute;
      top: 2%;
      left: 5%;
      height: 30vh;
      margin: auto;
      text-align: center;
    }
  }
`;

export const BlockItem = styled.div`
  width: 90%;
  margin: 0 auto;
  position: absolute;
  bottom: 10%;
  left: 5%;
  display: flex;
  justify-content: space-between;
  span {
    opacity: 0;
    position: relative;
    top: -70%;
    left: -20px;
    font-size: 20px;
    color: white;
    transition: 0.5s;
  }
  .game-card {
    width: 230px;
    height: 125px;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s;
    margin: 0 5px;
    position: relative;
    img {
      width: 100%;
      transform: scale(1.2);
      height: auto;
      transition: 0.5s;
      object-fit: cover;
    }
    &:hover {
      box-shadow: 0 0 0 3px blue;
    }
    &:hover span {
      opacity: 1;
      z-index: 3;
      left: 10px;
    }
    &:hover img {
      transform: scale(1);
    }
    &:hover::before {
      content: "";
      transition: 0.5s;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      background: linear-gradient(90deg, black, rgb(0, 0, 0, 0.1));
    }
  }
  .active {
    box-shadow: 0 0 0 3px blue;
  }
  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
    justify-content: center;
    bottom: 3%;
    .game-card {
      margin: 10px 0;
    }
  }
`;

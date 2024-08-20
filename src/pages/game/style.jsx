import styled from "styled-components";

export const InfoPageStyle = styled.div`
  width: 100%;
  display: flex;
  kbd {
    width: 100%;
    position: fixed;
    height: 100vh;
    background: linear-gradient(
        45deg,
        rgb(40, 45, 50),
        rgb(40, 45, 50, 0.95),
        rgb(40, 45, 50)
      ),
      url(${(prop) => prop.backImg}), #282c31;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

export const GameBlock = styled.div`
  width: 350px;
  position: sticky;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  top: 10px;
  left: 150px;
  height: 270px;
  margin-top: 50px;
  img {
    border-radius: 5px;
    width: 100%;
  }
  .btns {
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button {
      height: 50px;
      outline: none;
      border: none;
      border-radius: 5px;
    }
    .free {
      background: #404555;
      color: #98999a;
      width: 65px;
    }
    .now {
      background: #4799eb;
      color: white;
      font-size: bold;
      width: 280px;
    }
  }
  p {
    color: grey;
    margin-top: 10px;
  }
  @media screen and (max-width: 550px) {
    position: relative;
    top: 10px;
    left: 10px;
    margin-top: 0;
    width: 95%;
    .btns {
      .free {
        width: 55px;
      }
      .now {
        width: 270px;
      }
    }
  }
`;

export const Infos = styled.div`
  position: relative;
  width: 60%;
  margin: 20px;
  top: 5%;
  left: 12%;
  color: #aaaaaa;
  h1 {
    font-weight: bold;
  }
  h2,
  h4 {
    color: white;
  }
  .title {
    span {
      display: flex;
      align-items: center;
      div {
        width: 150px;
        display: flex;
        align-items: center;
      }
    }
    p {
      margin: 0 10px;
      font-weight: 100;
    }
    i {
      font-size: 30px;
    }
  }
  .about {
    span {
      color: grey;
    }
  }
  .blogs {
    display: flex;
    flex-wrap: wrap;
    width: 750px;
    .box {
      margin: 10px 20px;
      height: 60px;
      width: 200px;
      p {
        margin: 0;
        color: grey;
      }
    }
  }
  .screens {
    display: flex;
    width: 750px;
    overflow: scroll;
    &::-webkit-scrollbar {
      height: 10px;
      width: 0;
      background: #3e3e3e;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #000;
    }

    div {
      margin: 5px;
      img {
        width: auto;
        height: 145px;
        border-radius: 5px;
      }
    }
  }
  .block {
    display: flex;
    flex-wrap: wrap;
    .box {
      margin: 10px 20px;
      height: 60px;
      width: 350px;
      p {
        margin: 0;
        color: grey;
      }
    }
  }
  @media screen and (max-width: 550px) {
    width: 90%;
    left: -1%;
    margin-top: 50px;
    .blogs {
      width: 90%;
    }
    .screens {
      flex-wrap: wrap;
      width: 90%;
      &::-webkit-scrollbar {
        height: 0;
      }
    }
  }
`;

export const Games = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .card {
    height: 200px;
    width: 235px;
    background: #32383e;
    border-radius: 5px;
    color: grey;
    overflow: hidden;
    transition: 0.2s;
    img {
      width: 100%;
    }
    h6 {
      color: white;
      margin: 10px;
    }
    &:hover {
      margin-top: -10px;
      box-shadow: 0 5px 15px black;
    }
  }
  @media screen and (max-width: 550px) {
    .card {
      margin: 10px 0;
    }
  }
`;

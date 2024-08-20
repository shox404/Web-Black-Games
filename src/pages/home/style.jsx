import styled from "styled-components";

export const HomePageStyle = styled.div`
    height: 100vh;
    width: 100%;
`



export const GameBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: #212121;
    color: white;
`



export const Category = styled.div`
    display: flex;
    padding: 10px 30px;
    overflow: scroll;
    z-index: 5;
    background: #1e1e1e;
    &::-webkit-scrollbar {
        height: 10px;
        width: 0;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #000;
    }
    h2 {
        text-align: center;
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
        padding: 0 10px;
        margin: 5px;
    }
`

export const Search = styled.div`
    width: 100%;
    background: #111111;
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    h2 { color: white; }
    input {
        outline: none;
        border: none;
        border-radius: 5px;
        height: 40px;
        width: 250px;
        padding: 0 10px;
    }
    @media screen and (max-width: 550px){
        flex-wrap: wrap !important;
        text-align: center !important;
        h2 { margin: 5px auto; }
        input {
            margin: auto;
        }
    }
`
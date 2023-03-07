import styled from "styled-components";

export const Calc = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: white;
  border-radius: 10px;
  border: 2px solid gray;

  h1 {
    color: #d74220;
    font-size: 40px;
    margin-bottom: 70px;
  }
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    background-color: ${a => a.grau===true?"#CDEAE3":"#FFFFFF"};

`
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  ul:first-child {
    background-color: #28a684;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
  }
`;
export const Inputs = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    margin-left: 50px;
  }
  p {
    color: #32a597;
    font-size: 20px;
    margin-bottom: 10px;
  }

  input {
    width: 300px;
    height: 45px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  button {
    width: 305px;
    height: 50px;
    border: 3px solid #32a597;
    border-radius: 5px;
    margin-bottom: 20px;
    color: #32a597;
    font-weight: bold;
    font-size: 20px;
  }
`;
export const Result = styled.div`
  margin-top: 30px;
  background-color: #d74220;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 300px;
  height: 60px;
  border-radius: 50px;
`;
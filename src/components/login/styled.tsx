import styled from "styled-components";
import TelaLogin from "../../assets/TelaLogin.png";

export const ContainerImage = styled.div`
  width: auto;
  height: 100%;
  min-height: 640px;
  padding: 4rem 1rem;
  background-image: url(${TelaLogin});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Container = styled.div`
  align-items: center;
  background-color: #4c4c6d;
  border-radius: 0.75rem;
  margin: auto;
  padding: 1rem;
  text-align: center;

  height: auto;
  width: 35%;
  /* align-items: center;
  background-color: #4c4c6d;
  margin-left: 5rem;*/
  /* width: 50%; */
  /*padding: 1rem;
  text-align: center;

  height: 37rem; */

  /* @media (width: 970px) {
    margin: 8rem 15rem;
    background-color: #000;
  } */
`;

export const LoginContent = styled.div`
  display: inline-grid;
  text-align: left;
  width: 90%;
  margin-top: 1rem;
`;

export const LabelLogin = styled.label`
  margin: 0.5rem 0;
  color: #e8f6ef;
  font: normal 300 1rem/2rem "Open Sans", "Montserrat";
  margin-top: 1rem;
`;
// E8F6EF

export const Title = styled.h1`
  color: #ffe194;
  font: normal 300 4rem/2rem "Lobster";
  letter-spacing: 0.5rem;
  margin-top: 3rem;
`;

export const Subtitle = styled.button`
  color: #e8f6ef;
  font: normal 700 1rem/2rem "Open Sans", "Montserrat";
  margin-top: 1rem;
  letter-spacing: 0.2rem;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`;

export const TextOption = styled.h3`
  color: #e8f6ef;
  font: normal 900 1rem/2rem "Open Sans", "Montserrat";
  margin-top: 2rem;
`;

export const InputLogin = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: transparent;
`;

export const LoginButton = styled.button`
  margin: 30px 2px;
  width: 40%;
  justify-self: center;

  background-color: #fff;
  color: #4c4c6d;
  font: normal 700 16px/22px "Open Sans", "Montserrat";
  border-radius: 0.5rem;
  padding: 0.4rem 0.5rem;
  border: transparent;
  cursor: pointer;
`;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  LoginContent,
  LabelLogin,
  LoginButton,
  InputLogin,
  Title,
  ContainerImage,
  Subtitle,
  TextOption,
} from "./styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubtmit = () => {
    console.log(email);
    console.log(password);
    navigate("/home");
  };

  const handleSignUp = () => {
    console.log("Sign Up");
  };

  return (
    <ContainerImage>
      <Container>
        <Title>Persona</Title>
        <Subtitle onClick={handleSignUp}>Create Account </Subtitle>
        <TextOption>- O R -</TextOption>
        <LoginContent>
          <LabelLogin>Email:</LabelLogin>
          <InputLogin
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelLogin>Senha:</LabelLogin>
          <InputLogin
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={handleSubtmit}>Login</LoginButton>
        </LoginContent>
      </Container>
    </ContainerImage>
  );
}

export default Login;

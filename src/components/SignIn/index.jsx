import React, { useRef } from "react";
import logo from "../../assets/logo.png";
import { Container, Content, Logo, Title, Button, Form, Input } from "./style";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwRef = useRef();
  const onButton = () => {
    if (emailRef.current.value === "admin" && pwRef.current.value === "admin") {
      navigate("/home");
    } else {
      input.style.borderColor = "red";
      password.style.borderColor = "red";
    }
  };
  return (
    <Container>
      <Content>
        <Logo src={logo} />
        <Title>ДОБРО ПОЖАЛОВАТЬ</Title>
        <Form>
          <Input type="text" id="input" ref={emailRef} placeholder="email" />
          <Input
            type="password"
            id="password"
            ref={pwRef}
            placeholder="password"
          />
          <Button onClick={onButton}>ВОЙТИ</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;

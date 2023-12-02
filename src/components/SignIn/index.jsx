import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import gall1 from "../../assets/gall1.png";
import gall2 from "../../assets/gall2.png";
import gall3 from "../../assets/gall3.png";
import gall4 from "../../assets/gall4.png";
import gall5 from "../../assets/gall5.png";
import gall6 from "../../assets/gall6.png";
import gall7 from "../../assets/gall7.png";
import {
  Container,
  Wrapper,
  Content,
  Logo,
  Title,
  Button,
  Form,
  Input,
  Slider,
  Line,
  Carousels,
  CarouselItem,
  Img,
} from "./style";
import { useUserContext } from "../../context/UserContext";
import Cookies from "js-cookie";

const SignIn = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwRef = useRef();

  const { signIn } = useUserContext();

  const onClick = async () => {
    await fetch("/api/Authorizatsion/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: emailRef?.current?.value.trim(),
        password: pwRef?.current?.value.trim(),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        signIn(res);
      });
    if (Cookies.get("token")) {
      navigate("/home");
    } else {
      input.style.borderColor = "red";
      password.style.borderColor = "red";
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo src={logo} />
          <Title>XUSH KELIBSIZ!</Title>
          <Form onSubmit={formSubmit}>
            <Input
              type="text"
              id="input"
              defaultValue={"admin"}
              ref={emailRef}
              placeholder="email"
            />
            <Input
              type="password"
              id="password"
              ref={pwRef}
              placeholder="password"
              defaultValue={"admin"}
            />
            <Button onClick={onClick}>KIRISH</Button>
          </Form>
        </Content>
        <Line />
        <Slider>
          <Carousels autoplay>
            <CarouselItem>
              <Img src={gall1} />
            </CarouselItem>
            <CarouselItem>
              <Img src={gall2} />
            </CarouselItem>
            <CarouselItem>
              <Img src={gall3} />
            </CarouselItem>
            <CarouselItem>
              <Img src={gall4} />
            </CarouselItem>
            <CarouselItem>
              <Img src={gall5} />
            </CarouselItem>
            <CarouselItem>
              <Img src={gall6} />
            </CarouselItem>
            <CarouselItem>
              <Img src={gall7} />
            </CarouselItem>
          </Carousels>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

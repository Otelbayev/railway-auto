import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {
  Container,
  Wrapper,
  Header,
  Content,
  Title,
  Logo,
  Body1,
  Text,
  P,
  Button,
  Ul,
  Li,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import Cookies from "js-cookie";

const Landing = () => {
  const navigate = useNavigate();
  const { token, userDetails } = useUserContext();

  const onClick = () => {
    if (token && userDetails) {
      navigate("/home");
    } else {
      navigate("/signin");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Content>
          <Header>
            <Logo src={logo} />
            <Title>"O'ZTEMIRYO'LMASHTAMIR" AJ</Title>
            <Button onClick={onClick}>
              {userDetails?.firstName || "KIRISH"}
            </Button>
          </Header>
          <Body1 id="body1">
            <Text>
              <Ul>
                <P>
                  «О'ztemiryo'lmashta'mir» AJ tuzilmaviy korxona hisoblanadi
                  Reyestr portaliga kiritilgan “O'zbekiston temir yo'llari” AJ
                  Respublikada lokomotiv ta'mirlash bo'yicha yagona yetkazib
                  beruvchilar O'zbekiston. Korxonaning asosiy faoliyati
                </P>
                <Li>
                  barcha seriyali teplovozlarning xizmat qilish muddatini
                  uzaytirgan holda kapital va kapital ta'mirlash;
                </Li>
                <Li>
                  VL80S va VL60K o'zgaruvchan tok elektrovozlarining xizmat
                  muddatini uzaytirgan holda kapital va kapital ta'mirlash;
                </Li>
                <Li> yuk vagonlarini kapital ta'mirlash;</Li>
                <Li>
                  xizmat muddatini uzaytirgan holda yuk vagonlarini
                  modernizatsiya qilish;
                </Li>
                <Li> elektr mashinalarini kapital ta'mirlash;</Li>
                <Li> g'ildirak guruhlarini shakllantirish;</Li>
                <Li> ED118 lokomotiv elektr motorlarini tiklash;</Li>
                <Li> lokomotiv agregatlarini ta'mirlash;</Li>
                <Li>
                  asboblar va barcha turdagi asbobuskunalar ishlab chiqarish;
                </Li>
                <Li> rezina buyumlar ishlab chiqarish;</Li>
                <Li>
                  harakatlanuvchi tarkib va ​​yo'l ustki tuzilishi uchun ehtiyot
                  qismlar ishlab chiqarish.
                </Li>
              </Ul>
            </Text>
          </Body1>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Landing;

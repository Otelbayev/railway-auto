import React from "react";
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

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Content>
          <Header>
            <Logo src={logo} />
            <Title>УП "O'ZTEMIRYO'LMASHTAMIR"</Title>
            <Button onClick={() => navigate("/signin")}>вход</Button>
          </Header>
          <Body1 id="body1">
            <Text>
              <Ul>
                <P>
                  УП «О'ztemiryo'lmashta'mir» является структурным предприятием
                  АО «Узбекистон темир йуллари», который введен в портал реестр
                  единых поставщиков по ремонту локомотивов в Республики
                  Узбекистан. Основной вид деятельности предприятия
                </P>
                <Li> капитальный и капитально</Li>
                <Li>
                  восстановительный ремонт подвижных составов, в частности:
                </Li>
                <Li> капитального ремонта и капитально</Li>
                <Li>
                  восстановительного ремонта с продлением срока службы
                  тепловозов всех серий;
                </Li>
                <Li> капитальный и капитально</Li>
                <Li>
                  восстановительный ремонт с продлением срока службы
                  электровозов переменного тока ВЛ80С и ВЛ60К;
                </Li>
                <Li> капитальный ремонт грузовых вагонов;</Li>
                <Li>
                  модернизация грузовых вагонов с продлением срока службы;
                </Li>
                <Li> капитальный ремонт электрических машин;</Li>
                <Li> формирование колёсных пар;</Li>
                <Li> восстановление тепловозных электродвигателей ЭД-118;</Li>
                <Li> ремонт агрегатов локомотивов;</Li>
                <Li> изготовления инструментов и всех видов оснасток;</Li>
                <Li> изготовления резинотехнических изделий;</Li>
                <Li>
                  изготовления запасных частей для подвижного состава и верхнего
                  строения пути.
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

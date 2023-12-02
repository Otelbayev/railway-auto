import React, { useEffect } from "react";
import statistic from "../../assets/statistic.png";
import user from "../../assets/user.png";
import quarter from "../../assets/quarter.png";
import { Box, Content, Count, Div, Icon, P, Span } from "./style";

const Home = () => {
  return (
    <div className="container">
      <div className="title">Asosiy</div>
      <Content>
        <Box type="red">
          <Div>
            <Count>50</Count>
            <P>Royxatdan otgan foydalanuvchilar</P>
          </Div>
          <Icon src={user} />
        </Box>
        <Box type="green">
          <Div>
            <Count>
              50<Span>%</Span>
            </Count>
            <P>Qaytish darajasi</P>
          </Div>
          <Icon src={statistic} />
        </Box>
        <Box type="gold">
          <Div>
            <Count>50</Count>
            <P>Noyob tashrif buyuruvchilar</P>
          </Div>
          <Icon src={quarter} />
        </Box>
      </Content>
    </div>
  );
};

export default Home;

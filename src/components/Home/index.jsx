import React, { useEffect, useState } from "react";
import statistic from "../../assets/statistic.png";
import user from "../../assets/user.png";
import quarter from "../../assets/quarter.png";
import { Box, Content, Count, Div, Icon, P, Span } from "./style";
import Cookies from "js-cookie";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/usercrud/getalluser", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  let count = 0;
  let count1 = 0;
  let count2 = 0;
  data.forEach((e) => {
    count++;
    if (e?.role === 1) {
      count1++;
    }

    if (e?.role === 2) {
      count2++;
    }
  });
  return (
    <div className="container">
      <div className="title">Asosiy</div>
      <Content>
        <Box type="red">
          <Div>
            <Count>{count}</Count>
            <P>Royxatdan otgan foydalanuvchilar</P>
          </Div>
          <Icon src={user} />
        </Box>
        <Box type="green">
          <Div>
            <Count>{count1}</Count>
            <P>Admin</P>
          </Div>
          <Icon src={statistic} />
        </Box>
        <Box type="gold">
          <Div>
            <Count>{count2}</Count>
            <P>Xodimlar</P>
          </Div>
          <Icon src={quarter} />
        </Box>
      </Content>
    </div>
  );
};

export default Home;

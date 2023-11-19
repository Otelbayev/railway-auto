import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const Img = styled.img`
  width: 50px;
  height: 100%;
`;

export const Headers = styled(Header)`
  background: #fff;
  border-bottom: 1px solid lightgray;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 10px;
`;

export const Siders = styled(Sider)`
  width: 230px;
  @media (max-width: 600px) {
    display: ${({ collapsed }) => (collapsed ? "none" : "block")};
  }
`;

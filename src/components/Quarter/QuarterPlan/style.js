import { Menu } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  margin-top: 20px;
  border: 1px solid lightgray;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Div = styled(Menu)`
  height: 40px;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 600;
  color: black;
  cursor: pointer;
`;

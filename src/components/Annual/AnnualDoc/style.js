import { Button } from "antd";
import styled from "styled-components";
import { EyeOutlined } from "@ant-design/icons";

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

export const Div = styled(Button)`
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export const Icon = styled(EyeOutlined)``;

import { Button as Btn } from "antd";
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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Div = styled(Btn)`
  cursor: pointer;
  width: ${({ none }) => (none ? "15%" : "90%")};
  margin: 10px 0;
`;

export const Icon = styled(EyeOutlined)``;

export const Table = styled.table`
  border: 1px solid lightgray;
  width: 100%;
  border-collapse: collapse;
  tr {
    text-align: center;
    height: 50px;
    td {
      font-size: 20px;
    }
  }
`;

import styled from "styled-components";
import { Button, Select } from "antd";

export const Content = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 3px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  width: 100%;
`;

export const Form = styled.form``;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 15px 0;
`;
export const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
  width: 30%;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const Input = styled.input`
  border: 1px solid lightgray;
  outline: none;
  border-radius: 3px;
  padding-left: 15px;
  font-size: 15px;
  height: 40px;
  width: 50%;
  color: gray;
`;
export const Buttons = styled(Button)`
  font-size: 18px;
  height: 40px;
  margin: 10px;
  @media (max-width: 600px) {
    font-size: 14px;
    margin: 5px;
  }
`;

export const Selects = styled(Select)`
  height: 40px;
  width: 50%;
`;

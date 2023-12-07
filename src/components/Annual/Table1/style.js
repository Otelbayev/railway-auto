import styled, { css } from "styled-components";
import { EditOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
export const Container = styled.div`
  font-family: "Montserrat";
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  margin-top: 20px;
  border: 1px solid lightgray;
`;

export const Table = styled.table`
  border-collapse: collapse;
  background-color: #fff;
  width: 100%;
`;
export const Tr = styled.tr`
  text-align: center;
  font-weight: 500;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid lightgray;
`;
export const Td = styled.td`
  padding: 8px;
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid lightgray;
`;

const Color = (props) => {
  switch (props.type) {
    case "gold":
      return "goldenrod";
    case "blue":
      return "rgb(93, 93, 236)";
    case "red":
      return "red";

    case "green":
      return "rgb(32, 167, 55)";

    default:
      return "rgb(109, 109, 109)";
  }
};

const common = css`
  transition: 0.2s;
  font-size: 22px;
  padding: 6px;
  background: transparent;
`;

export const Button = styled.button`
  border: 1px solid ${Color};
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

export const Icon1 = styled(EditOutlined)`
  ${common};
  color: goldenrod;
  &:hover {
    color: #fff;
    background: goldenrod;
  }
`;

export const Icon2 = styled(CheckOutlined)`
  ${common};
  color: rgb(32, 167, 55);
  &:hover {
    color: #fff;
    background: rgb(32, 167, 55);
  }
`;

export const Icon3 = styled(CloseOutlined)`
  ${common};
  color: red;
  &:hover {
    color: #fff;
    background: red;
  }
`;

export const Paginations = styled(Pagination)`
  display: flex;
  justify-content: flex-end;
  margin: 30px 30px 0 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Btn = styled.button`
  border: 1px solid ${Color};
  border-radius: 4px;
  background: ${Color};
  padding: 8px 10px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  padding: 10px 0;
  & > div {
    text-transform: uppercase;
  }
`;

export const Epig = styled.div`
  display: flex;
  justify-content: flex-end;
  & > div {
    line-height: 22px;
    text-align: center;
    padding: 5px 20px;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 15px;
`;

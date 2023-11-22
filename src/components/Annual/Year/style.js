import styled, { css } from "styled-components";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  margin-top: 20px;
  border: 1px solid lightgray;
`;

export const Table = styled.table`
  border-collapse: collapse;
  background-color: #fff;
  margin: 10px;
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
  padding: 10px;
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid lightgray;
`;

const Color = (props) => {
  switch (props.type) {
    case "gold":
      return "goldenrod";
      break;
    case "blue":
      return "blue";
      break;
    case "red":
      return "red";
      break;

    default:
      return "gray";
      break;
  }
};

const common = css`
  font-size: 24px;
  padding: 6px;
  background: transparent;
`;

export const Button = styled.button`
  border: 1px solid ${Color};
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
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

export const Icon2 = styled(EyeOutlined)`
  ${common};
  color: blue;
  &:hover {
    color: #fff;
    background: blue;
  }
`;

export const Icon3 = styled(DeleteOutlined)`
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

export const Span = styled.button`
  cursor: pointer;
  margin-right: 50px;
  font-size: 25px;
  padding: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  color: coral;
  background: #fff;
  border-radius: 5px;
`;

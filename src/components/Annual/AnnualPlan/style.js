import styled, { css } from "styled-components";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";

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
  border-color: lightgray;
  margin: 10px;
`;
export const Tr = styled.tr`
  text-align: center;
  font-weight: 500;
`;
export const Th = styled.th`
  padding: 10px;
`;
export const Td = styled.td`
  padding: 10px;
  color: rgba(0, 0, 0, 0.9);
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
  background: #fff;
`;

export const Button = styled.button`
  border: 1px solid ${Color};
  border-radius: 4px;
  cursor: pointer;
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

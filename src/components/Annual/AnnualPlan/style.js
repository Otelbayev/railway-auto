import styled, { css } from "styled-components";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";

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

export const Button = styled.button`
  border: 1px solid ${Color};
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

const common = css`
  font-size: 24px;
  padding: 6px;
  background: transparent;
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

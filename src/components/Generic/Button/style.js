import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "danger":
      return {
        background: "red",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "primary": {
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
    }
    case "success": {
      return {
        background: "green",
        border: "1px solid #e6e9ec",
        color: "#fff",
      };
    }
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
  }
};

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => (height ? `${height}px` : "35px")};
  width: ${({ width }) => (width ? `${width}px` : "100px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  border-radius: 4px;
  ${getType}
  min-width:50px;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

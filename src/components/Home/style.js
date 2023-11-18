import styled from "styled-components";

const bgColor = (props) => {
  switch (props.type) {
    case "red":
      return "#BE3144";
      break;

    case "green":
      return "#557C55";
      break;

    case "blue":
      return "#7071E8";
      break;

    case "gold":
      return "#FF9209";
      break;

    default:
      return "#4F4A45";
      break;
  }
};

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;
export const Box = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-radius: 5px;
  padding: 20px;
  background-color: ${bgColor};
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Count = styled.div`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
`;
export const P = styled.div`
  color: #fff;
  font-size: 14px;
`;
export const Icon = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0.5;
  padding: 10px;
`;

export const Span = styled.span``;

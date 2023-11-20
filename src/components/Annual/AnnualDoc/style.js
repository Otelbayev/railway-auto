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

export const Div = styled.div`
  height: 40px;
  background-color: ${({ active }) => (active ? "blue" : "lightblue")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

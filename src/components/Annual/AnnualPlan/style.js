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

import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  margin-top: 20px;
  border: 1px solid lightgray;
  min-height: 500px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid lightgray;
  width: 100%;
  font-size: 16px;
  tr {
    text-align: center;
  }
  th {
    padding: 8px;
    font-weight: 600;
    padding: 8px;
  }
  td {
    padding: 8px;
    min-width: 70px;
  }
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

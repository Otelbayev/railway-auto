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
  border: 1px solid lightgray;
  border-collapse: collapse;
  tr {
    text-align: center;
    height: 50px;
    td {
      font-size: 20px;
    }
  }
`;

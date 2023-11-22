import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  margin-top: 20px;
  border: 1px solid lightgray;
  min-height: 500px;
  /* display: flex;
  flex-direction: column;
  gap: 10px; */
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
  tr {
    text-align: center;
  }
  th {
    padding: 8px;
    font-weight: 600;
  }
  td {
    min-width: 70px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: lightgray;
  min-height: 100vh;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  background: #fff;
  width: 210mm;
  font-family: "Times New Roman", Times, serif;
  padding: 20px 50px;
  box-shadow: 0 0 10px gray;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th {
    padding: 10px;
  }
  td {
    text-align: center;
    padding: 10px;
    font-size: 14px;
  }
`;

export const Top = styled.div`
  text-align: center;
  margin-left: 200px;
  width: 100%;
  font-size: 14px;
  p {
    padding: 5px 0;
  }
`;

export const Title = styled.div`
  margin: 0 90px;
  text-align: center;
  padding: 20px 0;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 100px;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

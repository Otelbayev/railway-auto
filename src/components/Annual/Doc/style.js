import styled from "styled-components";

export const Container = styled.div`
  background-color: lightgray;
  min-height: 100vh;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  background: #fff;
  width: 1100px;
  font-family: "Times New Roman", Times, serif;
  padding: 20px 50px;
  box-shadow: 0 0 10px gray;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th {
    padding: 10px;
  }
  td {
    text-align: center;
    padding: 3px;
    font-size: 14px;
  }
`;

export const Top = styled.div`
  text-align: center;
  width: 100%;
  font-size: 14px;
  p {
    padding: 5px 0;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;

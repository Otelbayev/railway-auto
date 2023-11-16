import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid var(--colorSecondary);
  padding: 50px;
  border-radius: 10px;
`;

export const Span = styled.span`
  cursor: pointer;
`;

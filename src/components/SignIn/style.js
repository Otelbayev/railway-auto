import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px #fff;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const Logo = styled.img`
  width: 100px;
`;
export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: goldenrod;
`;
export const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;
export const Input = styled.input`
  outline: none;
  padding: 10px 5px;
  font-size: 14px;
  border: 1px solid goldenrod;
  border-radius: 3px;
  box-shadow: 0 0 5px goldenrod;
`;
export const Button = styled.button`
  font-size: 16px;
  background: goldenrod;
  color: #ffff;
  padding: 10px 16px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:active {
    opacity: 0.6;
  }
`;

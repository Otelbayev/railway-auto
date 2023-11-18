import styled from "styled-components";
import { Carousel } from "antd";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  @media (max-width: 960px) {
    padding: 10px;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    height: 100vh;
    width: 100%;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding-right: 30px;
  @media (max-width: 600px) {
    gap: 20px;
  }
`;
export const Logo = styled.img`
  width: 100px;
  @media (max-width: 600px) {
    width: 80px;
  }
`;
export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: goldenrod;
  @media (max-width: 600px) {
    font-size: 20px;
  }
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
  @media (max-width: 600px) {
    padding: 8px 4px;
  }
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
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Slider = styled.div``;
export const Line = styled.div`
  background: lightgray;
  width: 2px;
  height: 400px;
  border-radius: 15px;
  @media (max-width: 960px) {
    height: 2px;
    width: 100%;
  }
`;

export const Carousels = styled(Carousel)`
  width: 500px;
  height: 400px;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    width: 350px;
    height: 250px;
  }
`;

export const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 500px;
  height: 400px;
  @media (max-width: 600px) {
    width: 100%;
    height: 250px;
  }
`;

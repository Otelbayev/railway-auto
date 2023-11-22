import styled, { keyframes } from "styled-components";
import bg from "../../assets/bg.webp";

const anim = keyframes`
    0%{
        transform: translateX(-100%);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
`;

const anim1 = keyframes`
    0%{
        transform: translateX(100%);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
export const Content = styled.div`
  transform: 0.5s;
  margin: 0 auto;
  width: 90%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 94%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  animation-name: ${anim};
  animation-duration: 1.5s;
  gap: 10px;
`;

export const Title = styled.h1`
  white-space: nowrap;
  color: #fff;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 30px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  width: 80px;

  @media (max-width: 600px) {
    width: 70px;
    @media (max-width: 600px) {
      width: 50px;
    }
  }
`;

export const Body1 = styled.div`
  height: calc(100vh - 100px);
  animation-name: ${anim1};
  animation-duration: 1.5s;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 20px 0 20px;
  gap: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Text = styled.div``;
export const Ul = styled.ul`
  color: #fff;
`;
export const Li = styled.li`
  margin-left: 30px;
  font-size: 16px;
  padding: 3px 0;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
export const P = styled.p`
  padding-bottom: 5px;
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 16px;
  box-shadow: inset 0 0 7px #fff;
  font-weight: 400;
  border-radius: 2px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  &:active {
    opacity: 0.4;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 10px;
  }
`;

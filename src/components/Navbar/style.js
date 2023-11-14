import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  padding: 15px;
  transition: 0.2s;
  gap: 10px;
  cursor: pointer;
`;

export const Name = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const Link = styled(NavLink)``;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px;
`;

export const Logo = styled.img`
  height: 100%;
`;

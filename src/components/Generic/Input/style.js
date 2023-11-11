import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  min-width: 120px;
  transition: 0.3s;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "33px")};
  border: 1px solid #e6e9ec;
  outline: none;
  padding-left: ${({ icon }) => (icon ? "40px" : "15px")};

  &:focus {
    border: 1px solid #0061df;
  }
  &:hover {
    border: 1px solid #0061df;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 11px;
  left: 10px;
`;

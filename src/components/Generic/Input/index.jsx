import React, { forwardRef } from "react";
import { Container, Wrapper, Img } from "./style";

const Input = forwardRef(
  (
    {
      onChange,
      type,
      placeholder,
      name,
      value,
      defaultValue,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        {icon && <Img src={icon} />}
        <Container
          onChange={onChange}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          type={type}
          width={width}
          height={height}
          icon={icon}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

export default Input;

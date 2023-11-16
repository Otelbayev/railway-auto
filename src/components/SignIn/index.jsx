import React, { useRef, useState } from "react";
import { Container, Wrapper } from "./style";
import { Input } from "../Generic/index";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

const SignIn = () => {
  const [loadings, setLoadings] = useState([]);
  const navigate = useNavigate();
  const usernameRef = useRef();
  const pwRef = useRef();

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
      if (
        usernameRef.current.value === "user" &&
        pwRef.current.value === "user"
      ) {
        navigate("/user");
      }
    }, 700);
  };

  return (
    <Container>
      <Wrapper>
        <h1>SignIn</h1>
        <Input
          ref={usernameRef}
          type="text"
          placeholder="username"
          width={200}
          defaultValue={"user"}
        />
        <Input
          ref={pwRef}
          defaultValue={"user"}
          type="password"
          placeholder="password"
          width={200}
        />
        <Button
          type="primary"
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Sign In
        </Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

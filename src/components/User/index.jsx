import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const User = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/signin");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <h1>User</h1>
      <Button type="primary" onClick={logout}>
        log out
      </Button>
    </div>
  );
};

export default User;

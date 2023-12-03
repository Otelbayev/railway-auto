import React, { useRef } from "react";
import { useUserContext } from "../../context/UserContext";
import {
  Contents,
  Content,
  Name,
  Position,
  Div,
  Label,
  Form,
  Input,
  Buttons,
} from "./style";
import Cookies from "js-cookie";

const User = () => {
  const { userDetails } = useUserContext();

  const loginRef = useRef();
  const oldPwRef = useRef();
  const newPwRef = useRef();
  const checkNewPwRef = useRef();

  const body = {
    login: loginRef?.current?.value,
    password: newPwRef?.current?.value,
  };

  const onSave = async () => {
    try {
      if (
        newPwRef?.current?.value?.trim() ===
        checkNewPwRef?.current?.value?.trim()
      ) {
        await fetch("/api/usercrud/1", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }).then((res) => res.json());
      } else {
        throw new Error();
      }
    } catch (error) {
      pw1.style.cssText = `
      background:rgba(255, 0, 0, 0.156);
      box-shadow:0;
      border:none;
    `;
      pw2.style.cssText = `
    background:rgba(255, 0, 0, 0.156);
    box-shadow:0;
    border:none;`;
    }
    pw1.onfocus = () => {
      pw1.style.cssText = ``;
    };
    pw2.onfocus = () => {
      pw2.style.cssText = ``;
    };
  };

  return (
    <div className="container">
      <div className="title">Profil</div>
      <Contents>
        <Content first="true">
          <Name>
            {userDetails?.firstName} {userDetails?.lastName}
          </Name>
          <Position>{userDetails?.firstName}</Position>
        </Content>
        <Content>
          <Form>
            <Div>
              <Label>Login</Label>
              <Input
                type="text"
                defaultValue={userDetails?.login}
                ref={loginRef}
              />
            </Div>
            <Div>
              <Label>Eski parol</Label>
              <Input type="text" ref={oldPwRef} />
            </Div>
            <Div>
              <Label>Yangi parol</Label>
              <Input id="pw1" type="text" ref={newPwRef} />
            </Div>
            <Div>
              <Label>Qayta Yangi parol</Label>
              <Input id="pw2" type="text" ref={checkNewPwRef} />
            </Div>
            <Div>
              <Buttons type="primary" onClick={onSave}>
                Saqlash
              </Buttons>
              <p>error</p>
            </Div>
          </Form>
        </Content>
      </Contents>
    </div>
  );
};

export default User;

import React, { useEffect, useRef, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const User = () => {
  const { userDetails, setUserDetails } = useUserContext();
  const loginRef = useRef();
  const nameRef = useRef();
  const lastRef = useRef();
  const newPwRef = useRef();
  const checkNewPwRef = useRef();
  const navigate = useNavigate();

  const [body, setBody] = useState({});

  useEffect(() => {
    fetch(`api/usercrud/getbyiduser/${userDetails?.id}`, {
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    })
      .then((res) => res.json())
      .then((res) => setBody(res));
  }, []);

  const onSave = async () => {
    try {
      if (
        newPwRef?.current?.value?.trim() ===
          checkNewPwRef?.current?.value?.trim() &&
        newPwRef?.current?.value?.trim() !== ""
      ) {
        await fetch(`/api/usercrud/updateuser/${userDetails?.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({
            ...body,
            login: loginRef?.current?.value,
            password: newPwRef?.current?.value,
            firstName: nameRef?.current?.value,
            lastName: lastRef?.current?.value,
          }),
        }).then((res) => res.json());
        setUserDetails({
          ...userDetails,
          login: loginRef?.current?.value,
          firstName: nameRef?.current?.value,
          lastName: lastRef?.current?.value,
        });
        navigate("/signin");
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
      pw1.onfocus = () => {
        pw1.style.cssText = ``;
      };
      pw2.onfocus = () => {
        pw2.style.cssText = ``;
      };
    }
  };

  return (
    <div className="container">
      <div className="title">Profil</div>
      <Contents>
        <Content $none={"jasurbek"}>
          <Name>
            {userDetails?.firstName} {userDetails?.lastName}
          </Name>
          <Position>{userDetails?.firstName}</Position>
        </Content>
        <Content>
          <Form>
            <Div>
              <Label>Ism</Label>
              <Input
                type="text"
                defaultValue={userDetails?.firstName}
                ref={nameRef}
              />
            </Div>
            <Div>
              <Label>Familiya</Label>
              <Input
                type="text"
                defaultValue={userDetails?.lastName}
                ref={lastRef}
              />
            </Div>
            <Div>
              <Label>Login</Label>
              <Input
                type="text"
                defaultValue={userDetails?.login}
                ref={loginRef}
              />
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
            </Div>
          </Form>
        </Content>
      </Contents>
    </div>
  );
};

export default User;

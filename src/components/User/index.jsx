import React from "react";
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

const User = () => {
  return (
    <div className="container">
      <div className="title">Профиль</div>
      <Contents>
        <Content first="true">
          <Name>Админов Админ</Name>
          <Position>Администратор</Position>
        </Content>
        <Content>
          <Form>
            <Div>
              <Label>Имя</Label>
              <Input type="text" defaultValue="Админов Админ" />
            </Div>
            <Div>
              <Label>Email</Label>
              <Input type="text" defaultValue="admin@admin" />
            </Div>
            <Div>
              <Label>Старый пароль</Label>
              <Input type="text" />
            </Div>
            <Div>
              <Label>Новый пароль</Label>
              <Input type="text" />
            </Div>
            <Div>
              <Label>Повторите пароль</Label>
              <Input type="text" />
            </Div>
            <Buttons type="primary">Сохранить</Buttons>
          </Form>
        </Content>
      </Contents>
    </div>
  );
};

export default User;

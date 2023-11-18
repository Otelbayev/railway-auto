import React from "react";
import { Content, Div, Label, Form, Input, Buttons, Selects } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import {
  mockTable,
  models,
  registrDepo,
  place,
  repair,
  months,
} from "../../../mock/mock";

const Single = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { model, number, depo, repairMode, repairPlace, outRepair, section } =
    mockTable.find((item) => item.id == Number(params.id));
  return (
    <div className="container">
      <div className="title">Профиль</div>
      <div>
        <Content>
          <Form>
            <Div>
              <Label>Локомотив русуми</Label>
              <Selects defaultValue={model} options={models} />
            </Div>
            <Div>
              <Label>Локомотив рақами</Label>
              <Selects defaultValue={number} options={models} />
            </Div>
            <Div>
              <Label>Локомотив рўйхатдан ўтган депо</Label>
              <Selects defaultValue={depo} options={registrDepo} />
            </Div>
            <Div>
              <Label>Таъмирлаш тури</Label>
              <Selects defaultValue={repairMode} options={repair} />
            </Div>
            <Div>
              <Label>Таъмирлаш жойи</Label>
              <Selects defaultValue={repairPlace} options={place} />
            </Div>
            <Div>
              <Label>Таъмирдан чикиши</Label>
              <Selects defaultValue={outRepair} options={months} />
            </Div>
            <Div>
              <Label>Секциялар сони</Label>
              <Input type="text" defaultValue={section} />
            </Div>
            <Buttons type="primary" onClick={() => navigate("/annual-plan")}>
              Сохранить
            </Buttons>
            <Buttons danger onClick={() => navigate("/annual-plan")}>
              Отменить
            </Buttons>
          </Form>
        </Content>
      </div>
    </div>
  );
};

export default Single;

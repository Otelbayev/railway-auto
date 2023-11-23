import React, { useContext } from "react";
import { Content, Div, Label, Form, Input, Buttons, Selects, I } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { PlanContext } from "../../../context/PlanContext";
import { models, repair } from "../../../mock/mock";

const Single = () => {
  const [data, setData] = useContext(PlanContext);
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">O'zgartitish</div>
      <div>
        <Content>
          <Form>
            <Div>
              <Label>Lokomativ seriasi</Label>
              <Selects defaultValue={models[0].value} options={models} />
            </Div>
            <Div>
              <Label>Tamirlash turi</Label>
              <Selects defaultValue={repair[0].value} options={repair} />
            </Div>
            <Div>
              <Label>Yanvar oyi rejasi</Label>
              <I>
                <Input placeholder="Rejasi" />
                <Input placeholder="№" />
              </I>
            </Div>
            <Div>
              <Label>Fevral oyi rejasi</Label>
              <I>
                <Input placeholder="Rejasi" />
                <Input placeholder="№" />
              </I>
            </Div>
            <Div>
              <Label>Mart oyi rejasi</Label>
              <I>
                <Input placeholder="Rejasi" />
                <Input placeholder="№" />
              </I>
            </Div>
            <Buttons type="primary" onClick={() => navigate(-1)}>
              Sqalash
            </Buttons>
            <Buttons danger onClick={() => navigate(-1)}>
              Bekor qilish
            </Buttons>
          </Form>
        </Content>
      </div>
    </div>
  );
};

export default Single;

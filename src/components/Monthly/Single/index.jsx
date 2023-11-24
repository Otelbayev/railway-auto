import React, { useContext, useRef, useState } from "react";
import { Content, Div, Label, Form, Input, Buttons, Selects } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { PlanContext } from "../../../context/PlanContext";
import { models, registrDepo, place, repair, months } from "../../../mock/mock";

const Single = () => {
  const [data, setData] = useContext(PlanContext);
  const params = useParams();
  const navigate = useNavigate();
  const { model, number, depo, repairMode, repairPlace, outRepair, section } =
    data.find((item) => item.id == Number(params.id));

  const numRef = useRef();
  const sectionRef = useRef();

  const [modelValue, setmodelValue] = useState(model);
  const [depoValue, setdepoValue] = useState(depo);
  const [repairValue, setrepairValue] = useState(repairMode);
  const [placeValue, setplaceValue] = useState(repairPlace);
  const [outValue, setoutValue] = useState(outRepair);

  return (
    <div className="container">
      <div className="title">O'zgartitish</div>
      <div>
        <Content>
          <Form>
            <Div>
              <Label>Lokomativ turi</Label>
              <Selects defaultValue={models[0].value} options={models} />
            </Div>
            <Div>
              <Label>Tamirlash turi</Label>
              <Selects defaultValue={repair[0].value} options={repair} />
            </Div>
            <Div>
              <Label>Seksiyalar soni</Label>
              <Input type="number" defaultValue={section} />
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

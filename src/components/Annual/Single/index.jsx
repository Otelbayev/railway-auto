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

  const handleSave = () => {
    let res = data.map((item) => {
      if (Number(params.id) === item.id) {
        return {
          id: item.id,
          model: modelValue,
          number: numRef.current.value,
          depo: depoValue,
          repairMode: repairValue,
          repairPlace: placeValue,
          outRepair: outValue,
          section: sectionRef.current.value,
        };
      }
      return item;
    });
    setData(res);
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="title">Изменить</div>
      <div>
        <Content>
          <Form>
            <Div>
              <Label>Локомотив русуми</Label>
              <Selects
                defaultValue={model}
                onChange={(e) => setmodelValue(e)}
                options={models}
              />
            </Div>
            <Div>
              <Label>Локомотив рақами</Label>
              <Input defaultValue={number} type="text" ref={numRef} />
            </Div>
            <Div>
              <Label>Локомотив рўйхатдан ўтган депо</Label>
              <Selects
                defaultValue={depo}
                onChange={(e) => setdepoValue(e)}
                options={registrDepo}
              />
            </Div>
            <Div>
              <Label>Таъмирлаш тури</Label>
              <Selects
                defaultValue={repairMode}
                onChange={(e) => setrepairValue(e)}
                options={repair}
              />
            </Div>
            <Div>
              <Label>Таъмирлаш жойи</Label>
              <Selects
                defaultValue={repairPlace}
                onChange={(e) => setplaceValue(e)}
                options={place}
              />
            </Div>
            <Div>
              <Label>Таъмирдан чикиши</Label>
              <Selects
                defaultValue={outRepair}
                onChange={(e) => setoutValue(e)}
                options={months}
              />
            </Div>
            <Div>
              <Label>Секциялар сони</Label>
              <Input type="number" ref={sectionRef} defaultValue={section} />
            </Div>
            <Buttons type="primary" onClick={handleSave}>
              Сохранить
            </Buttons>
            <Buttons danger onClick={() => navigate(-1)}>
              Отменить
            </Buttons>
          </Form>
        </Content>
      </div>
    </div>
  );
};

export default Single;

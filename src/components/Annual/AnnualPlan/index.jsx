import React from "react";
import { Container, Table, Th, Tr } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select } from "antd";
import { months, place, repair, registrDepo, models } from "../../../mock/mock";
const AnnualPlan = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">Создать годовой план</div>
      <Container>
        <Table>
          <thead>
            <Tr>
              <Th>№</Th>
              <Th>Локомотив русуми ва рақами</Th>
              <Th>Локомотив рўйхатдан ўтган депо</Th>
              <Th>Таъмирлаш тури</Th>
              <Th>Таъмирлаш жойи</Th>
              <Th>Таъмирдан чикиши</Th>
              <Th>Секциялар сони</Th>
              <Th>Действие</Th>
            </Tr>
            <Tr>
              <Th>#</Th>
              <Th>
                <div
                  style={{
                    display: "flex",
                    gap: 4,
                  }}
                >
                  <Select options={models} defaultValue={models[0].value} />
                  <Select options={models} defaultValue={models[0].value} />
                </div>
              </Th>
              <Th>
                <Select
                  defaultValue={registrDepo[0].value}
                  options={registrDepo}
                />
              </Th>
              <Th>
                <Select defaultValue={repair[0].value} options={repair} />
              </Th>
              <Th>
                <Select defaultValue={place[0].value} options={place} />
              </Th>
              <Th>
                <Select defaultValue={months[0].value} options={months} />
              </Th>
              <Th>
                <Input type="number" defaultValue={1} />
              </Th>
              <Th>
                <Button type="primary">Добавить</Button>
              </Th>
            </Tr>
          </thead>
          <tbody></tbody>
        </Table>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{
              background: "green",
              color: "#fff",
              width: "170px",
            }}
          >
            Сохранит
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AnnualPlan;

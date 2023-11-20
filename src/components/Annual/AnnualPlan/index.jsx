import React, { useContext, useState } from "react";
import { Container, Table, Th, Tr, Td, Icon1, Icon3 } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input, Select } from "antd";
import { months, place, repair, registrDepo, models } from "../../../mock/mock";
import { Button as Btn } from "antd";
import { PlanContext } from "../../../context/PlanContext";
const AnnualPlan = () => {
  const navigate = useNavigate();
  const param = useParams();

  const [data, setData] = useContext(PlanContext);
  const [newData, setNewData] = useState([]);

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
                <Btn type="primary">Добавить</Btn>
              </Th>
            </Tr>
          </thead>
          <tbody>
            {newData.map(
              ({
                id,
                model,
                number,
                depo,
                repairMode,
                repairPlace,
                outRepair,
                section,
              }) => {
                return (
                  <Tr key={id}>
                    <Td>{id}</Td>
                    <Td>
                      {model} {number}
                    </Td>
                    <Td>{depo}</Td>
                    <Td>{repairMode}</Td>
                    <Td>{repairPlace}</Td>
                    <Td>{outRepair}</Td>
                    <Td>{section}</Td>
                    <Td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                          width: "100%",
                        }}
                      >
                        <Button type="gold">
                          <Icon1 />
                        </Button>
                        <Button type="red">
                          <Icon3 />
                        </Button>
                      </div>
                    </Td>
                  </Tr>
                );
              }
            )}
          </tbody>
        </Table>
        <div style={{ textAlign: "center" }}>
          <Btn
            style={{
              background: "green",
              color: "#fff",
              width: "170px",
            }}
          >
            Сохранит
          </Btn>
        </div>
      </Container>
    </div>
  );
};

export default AnnualPlan;

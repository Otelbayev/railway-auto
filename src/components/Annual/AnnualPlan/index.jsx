import React, { useState } from "react";
import {
  Table,
  Tr,
  Th,
  Td,
  Button,
  Container,
  Icon1,
  Icon2,
  Icon3,
} from "./style";
import { mockTable } from "../../../mock/mock";
import { useNavigate } from "react-router-dom";
const AnnualPlan = () => {
  const [mockData, setMockData] = useState(mockTable);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">Годовой план</div>
      <Container>
        <Table border="1">
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
          </thead>
          <tbody>
            {mockData.map(
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
                        <Button
                          type="gold"
                          onClick={() => navigate(`/annual-plan/${id}`)}
                        >
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
      </Container>
    </div>
  );
};

export default AnnualPlan;

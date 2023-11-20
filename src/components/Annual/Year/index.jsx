import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import "datatables.net-select";
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
import { useNavigate, useParams } from "react-router-dom";

const Year = () => {
  const tableRef = useRef();

  const navigate = useNavigate();
  const param = useParams();
  console.log(param);

  useEffect(() => {
    const dataTable = $(tableRef.current).DataTable({
      columns: [
        { data: "id" },
        { data: "model" },
        { data: "number" },
        { data: "depo" },
        { data: "repairMode" },
        { data: "repairPlace" },
        { data: "outRepair" },
        { data: "section" },
      ],
    });
    return () => {
      dataTable.destroy();
    };
  }, [mockTable]);

  return (
    <div className="container">
      <div className="title">Годовой план</div>
      <Container>
        <Table ref={tableRef}>
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
            {mockTable.map(
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
                          disabled={
                            Number(param.year) === new Date().getFullYear()
                              ? false
                              : true
                          }
                          onClick={() =>
                            navigate(`/annual-doc/${param.year}/${id}`)
                          }
                        >
                          <Icon1 />
                        </Button>
                        <Button
                          type="red"
                          disabled={
                            Number(param.year) === new Date().getFullYear()
                              ? false
                              : true
                          }
                        >
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

export default Year;

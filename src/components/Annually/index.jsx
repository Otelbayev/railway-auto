import React, { useState } from "react";
import { Container, Table, Tr, Th, Td } from "./style";
import {
  mockTable,
  months,
  place,
  repair,
  registrDepo,
  numbers,
} from "../../mock/mock";
import { Button, Input, Select } from "../Generic";

const Annually = () => {
  const [isEdit, setIsEdit] = useState("");

  const onEdit = (id) => {
    setIsEdit(id);
  };

  return (
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
        {mockTable.map(({ id, title, data }) => {
          return (
            <tbody key={id}>
              <Tr>
                <Td colSpan={8}>{title}</Td>
              </Tr>
              {data.map(
                ({
                  id,
                  unique_id,
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
                        {isEdit === unique_id ? (
                          <div
                            div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "5px",
                            }}
                          >
                            <Input type="text" placeholder="model" />
                            <Select options={numbers} width={90} />
                          </div>
                        ) : (
                          `${model} ${number}`
                        )}
                      </Td>
                      <Td>
                        {isEdit === unique_id ? (
                          <Select options={registrDepo} />
                        ) : (
                          depo
                        )}
                      </Td>
                      <Td>
                        {isEdit === unique_id ? (
                          <Select options={repair} width={80} />
                        ) : (
                          repairMode
                        )}
                      </Td>
                      <Td>
                        {isEdit === unique_id ? (
                          <Select options={place} />
                        ) : (
                          repairPlace
                        )}
                      </Td>
                      <Td>
                        {" "}
                        {isEdit === unique_id ? (
                          <Select options={months} width={90} />
                        ) : (
                          outRepair
                        )}
                      </Td>
                      <Td>
                        {isEdit === unique_id ? (
                          <Input type="text" placeholder="Секция" />
                        ) : (
                          section
                        )}
                      </Td>
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
                          {isEdit === unique_id ? (
                            <>
                              <Button type="success" width={60}>
                                save
                              </Button>
                              <Button
                                onClick={() => setIsEdit(false)}
                                type="danger"
                                width={60}
                              >
                                cancle
                              </Button>
                            </>
                          ) : (
                            <Button
                              width={100}
                              onClick={() => onEdit(unique_id)}
                            >
                              edit
                            </Button>
                          )}
                        </div>
                      </Td>
                    </Tr>
                  );
                }
              )}
              <Tr>
                <Td colSpan={6}>ЖАМИ:</Td>
                <Td colSpan={7}>{"count"} та секция</Td>
              </Tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};
export default Annually;

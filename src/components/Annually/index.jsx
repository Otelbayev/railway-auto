import React, { useRef, useState } from "react";
import { Container, Table, Th, Tr, Td, Title, Div } from "./style";
import { Input, Select, Button } from "../Generic/index";
import {
  mockTable,
  numbers,
  depos,
  models,
  places,
  months,
} from "../../mock/mock";

const Annually = () => {
  const modelRef = useRef();
  const numRef = useRef();
  const [active, setActive] = useState(null);

  const [mockData, setMockData] = useState(mockTable);

  const onSave = (id) => {};

  return (
    <Container>
      <Title>Annual plan</Title>
      <Table border={1}>
        <thead>
          <tr>
            <Th>№</Th>
            <Th>Lokomativ rusmi va raqami</Th>
            <Th>Lokomativ royxatdan o'tgan depo</Th>
            <Th>Tamirlash turi</Th>
            <Th>Tamirlash joyi</Th>
            <Th>Tamirdan chiqishi</Th>
            <Th>Seksiyalar soni</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        {mockData.map(({ id, title, data }) => {
          const count = data.reduce(
            (curr, value) => (curr += value.section),
            0
          );
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
                  repaitMode,
                  repaitPlace,
                  outRepair,
                  section,
                }) => {
                  return (
                    <Tr key={unique_id}>
                      <Td>{id}</Td>
                      <Td>
                        {unique_id === active ? (
                          <Div>
                            <Input
                              width={10}
                              type="text"
                              placeholder="Model"
                              ref={modelRef}
                            />
                            <Select options={numbers} ref={numRef} />
                          </Div>
                        ) : (
                          `${model} ${number}`
                        )}
                      </Td>
                      <Td>
                        {unique_id === active ? (
                          <Select options={depos} />
                        ) : (
                          depo
                        )}
                      </Td>
                      <Td>
                        {unique_id === active ? (
                          <Select options={models} />
                        ) : (
                          repaitMode
                        )}
                      </Td>
                      <Td>
                        {unique_id === active ? (
                          <Select options={places} />
                        ) : (
                          repaitPlace
                        )}
                      </Td>
                      <Td>
                        {unique_id === active ? (
                          <Select options={months} />
                        ) : (
                          outRepair
                        )}
                      </Td>
                      <Td>
                        {unique_id === active ? (
                          <Input type="text" placeholder="Section" />
                        ) : (
                          section
                        )}
                      </Td>
                      <Td>
                        {unique_id === active ? (
                          <Div>
                            <Button
                              width={60}
                              onClick={() => onSave(unique_id)}
                              type="success"
                            >
                              save
                            </Button>
                            <Button
                              type="danger"
                              width={60}
                              onClick={() => setActive(null)}
                            >
                              cancle
                            </Button>
                          </Div>
                        ) : (
                          <Button
                            type="primary"
                            onClick={() => setActive(unique_id)}
                          >
                            Edit
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  );
                }
              )}
              <Tr>
                <Td colSpan={5}>Total</Td>
                <Td colSpan={2}>{count} ta seksiya</Td>
              </Tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};

export default Annually;

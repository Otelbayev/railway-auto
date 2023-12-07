import React, { useContext, useRef, useState } from "react";
import {
  Container,
  Table,
  Th,
  Tr,
  Button,
  Td,
  Icon1,
  Icon2,
  Icon3,
} from "./style";
import { useNavigate } from "react-router-dom";
import { Button as Btn, Input, Select } from "antd";
import { months, place, repair, registrDepo, models } from "../../../mock/mock";
import { PlanContext } from "../../../context/PlanContext";

const Create = () => {
  const navigate = useNavigate();
  const [data, setData] = useContext(PlanContext);
  const [newData, setNewData] = useState([]);

  const numRef = useRef();
  const sectionRef = useRef();

  const [modelValue, setmodelValue] = useState(data[0].model);
  const [depoValue, setdepoValue] = useState(data[0].depo);
  const [repairValue, setrepairValue] = useState(data[0].repairMode);
  const [placeValue, setplaceValue] = useState(data[0].repairPlace);
  const [outValue, setoutValue] = useState(data[0].outRepair);
  const [editId, setEditId] = useState(0);

  const handleClick = () => {
    setNewData([
      ...newData,
      {
        id: newData.length ? newData.length + data.length + 1 : data.length + 1,
        model: modelValue,
        number: numRef.current.input.value,
        depo: depoValue,
        repairMode: repairValue,
        repairPlace: placeValue,
        outRepair: outValue,
        section: sectionRef?.current?.input?.value,
      },
    ]);
  };

  const handleSubmit = () => {
    setData([...data, ...newData]);
    setNewData([]);
    navigate(-1);
  };

  const onEdit = (id) => {
    setEditId(id);
  };

  const onSave = (id) => {
    let res = newData.map((item) => {
      if (item.id === id) {
        return {
          id,
          model: modelValue,
          number: numRef.current.input.value,
          depo: depoValue,
          repairMode: repairValue,
          repairPlace: placeValue,
          outRepair: outValue,
          section: sectionRef?.current?.input?.value,
        };
      }
      return item;
    });
    setNewData(res);
    setEditId("");
  };

  const year = new Date().getFullYear();

  return (
    <div className="container">
      <div className="title">Yillik plan qo'shish</div>
      <Container>
        <Table>
          <thead>
            <Tr>
              <Th>№</Th>
              <Th>Lokomativ va ta'mir turi</Th>
              <Th>{year} yilga reja (seksiya)</Th>
              <Th>Jami qiymati</Th>
              <Th>Tahrirlash</Th>
            </Tr>
            <Tr>
              <Th>#</Th>

              <Th>
                <Select
                  defaultValue={registrDepo[0].value}
                  options={registrDepo}
                  onChange={(e) => setdepoValue(e)}
                />
              </Th>
              <Th>
                <Select
                  defaultValue={repair[0].value}
                  onChange={(e) => setrepairValue(e)}
                  options={repair}
                />
              </Th>

              <Th>
                <Input type="number" ref={sectionRef} defaultValue={1} />
              </Th>
              <Th>
                <Btn type="primary" onClick={handleClick}>
                  Qoshish
                </Btn>
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
                      {id === editId ? (
                        <div
                          style={{
                            display: "flex",
                            gap: 4,
                          }}
                        >
                          <Select
                            options={models}
                            onChange={(e) => setmodelValue(e)}
                            defaultValue={models[0].value}
                          />
                          <Input
                            ref={numRef}
                            defaultValue={15}
                            style={{
                              minWidth: "50px",
                            }}
                            type="text"
                          />
                        </div>
                      ) : (
                        `${model} ${number}`
                      )}
                    </Td>
                    <Td>
                      {id === editId ? (
                        <Select
                          defaultValue={registrDepo[0].value}
                          options={registrDepo}
                          onChange={(e) => setdepoValue(e)}
                        />
                      ) : (
                        depo
                      )}
                    </Td>
                    <Td>
                      {id === editId ? (
                        <Select
                          defaultValue={repair[0].value}
                          options={repair}
                          onChange={(e) => setrepairValue(e)}
                        />
                      ) : (
                        repairMode
                      )}
                    </Td>
                    <Td>
                      {id === editId ? (
                        <Select
                          defaultValue={place[0].value}
                          onChange={(e) => setplaceValue(e)}
                          options={place}
                        />
                      ) : (
                        repairPlace
                      )}
                    </Td>
                    <Td>
                      {id === editId ? (
                        <Select
                          defaultValue={months[0].value}
                          onChange={(e) => setoutValue(e)}
                          options={months}
                        />
                      ) : (
                        outRepair
                      )}
                    </Td>
                    <Td>
                      {id === editId ? (
                        <Input
                          type="number"
                          ref={sectionRef}
                          defaultValue={1}
                        />
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
                        {id === editId ? (
                          <Button type="blue" onClick={() => onSave(id)}>
                            <Icon2 />
                          </Button>
                        ) : (
                          <Button type="gold" onClick={() => onEdit(id)}>
                            <Icon1 />
                          </Button>
                        )}
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
              background: "red",
              color: "#fff",
              width: "100px",
            }}
            onClick={() => navigate(-1)}
          >
            Orqaga
          </Btn>
          <Btn
            style={{
              background: "green",
              color: "#fff",
              width: "100px",
            }}
            onClick={handleSubmit}
          >
            Saqlash
          </Btn>
        </div>
      </Container>
    </div>
  );
};

export default Create;

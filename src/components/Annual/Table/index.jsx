import React, { useContext, useState } from "react";
import {
  Table as T,
  Tr,
  Th,
  Td,
  Button,
  Container,
  Icon1,
  Icon3,
  Header,
  Span,
} from "./style";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PlanContext } from "../../../context/PlanContext";
import { Select, Pagination, Input, Button as Btn } from "antd";
import useSearch from "../../../hooks/useSearch";
import { useReplace } from "../../../hooks/useReplace";
import { models, months, place, registrDepo, repair } from "../../../mock/mock";

const Table = () => {
  const [data, setData] = useContext(PlanContext);
  const [filterData, setFitlerData] = useState(data);
  const navigate = useNavigate();
  const param = useParams();
  const query = useSearch();
  const { search } = useLocation();
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(10);
  const itemsPerPage = items;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filterData.slice(indexOfFirstItem, indexOfLastItem);
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  const handleSelect = (e) => {
    setItems(e);
  };

  const selectWidth = {
    width: "150px",
  };

  //filter
  const initialState = {
    id: query.get("id") || null,
    number: query.get("number") || null,
    section: query.get("section") || null,
    model: query.get("model") || null,
    depos: query.get("depos") || null,
    repairMode: query.get("repairMode") || null,
    repairPlace: query.get("repairPlace") || null,
    outRepair: query.get("outRepair") || null,
  };

  const [formData, setFormData] = useState(initialState);

  const onInputChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
    navigate(`${location?.pathname}${useReplace(name, value)}`);
  };
  const onSelectionChange = (value, type) => {
    setFormData({ ...formData, [type]: value });
    navigate(`${location.pathname}${useReplace(type, value)}`);
  };

  const onCancle = () => {
    navigate(`${location.pathname}`);
    setFormData({
      id: null,
      number: null,
      section: null,
      model: null,
      depos: null,
      repairMode: null,
      repairPlace: null,
      outRepair: null,
    });
  };

  console.log();

  return (
    <div className="container">
      <Header>
        <div className="title">Yillik plan - {param.year}</div>
        <Span onClick={() => navigate("/annual-doc")}>
          <i className="fa-solid fa-arrow-left"></i>
        </Span>
      </Header>
      <Container>
        <T>
          <thead>
            <Tr>
              <Th>
                <Input
                  placeholder="№"
                  onChange={onInputChange}
                  name="id"
                  value={formData.id}
                  style={{
                    width: "40px",
                  }}
                />
              </Th>
              <Th>
                <Select
                  placeholder="Rusimi"
                  options={models}
                  value={formData.model}
                  onChange={(value) => onSelectionChange(value, "model")}
                  style={{
                    width: "90px",
                  }}
                />
              </Th>
              <Th>
                <Input
                  placeholder="Raqam"
                  onChange={onInputChange}
                  name="number"
                  value={formData.number}
                />
              </Th>
              <Th>
                <Select
                  placeholder="Depo"
                  options={registrDepo}
                  value={formData.depos}
                  onChange={(value) => onSelectionChange(value, "depos")}
                  style={{ width: "90px" }}
                />
              </Th>
              <Th>
                <Select
                  placeholder="Tamirlash turi"
                  options={repair}
                  value={formData.repairMode}
                  onChange={(value) => onSelectionChange(value, "repairMode")}
                  style={selectWidth}
                />
              </Th>
              <Th>
                <Select
                  placeholder="Tamirlash joyi"
                  options={place}
                  value={formData.repairPlace}
                  onChange={(value) => onSelectionChange(value, "repairPlace")}
                  style={selectWidth}
                />
              </Th>
              <Th>
                <Select
                  placeholder="Tamirdan chiqishi"
                  options={months}
                  value={formData.outRepair}
                  onChange={(value) => onSelectionChange(value, "outRepair")}
                  style={selectWidth}
                />
              </Th>
              <Th>
                <Input
                  placeholder="Seksiya"
                  name="section"
                  onChange={onInputChange}
                  value={formData.section}
                  style={{
                    width: "75px",
                  }}
                />
              </Th>
              <Th>
                <Btn type="default" onClick={onCancle}>
                  cancle
                </Btn>
              </Th>
            </Tr>
            <Tr>
              <Th>№</Th>
              <Th>Lokomativ rusimi</Th>
              <Th>Lokomativ raqami</Th>
              <Th>Lokomativ royxatdan o'tgan depo</Th>
              <Th>Tamirlash turi</Th>
              <Th>Tamirlash joyi</Th>
              <Th>Tamirdan chiqishi</Th>
              <Th>Seksiyalar soni</Th>
              <Th>Tahrirlash</Th>
            </Tr>
          </thead>
          <tbody>
            {currentData.map(
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
                    <Td>{model}</Td>
                    <Td>{number}</Td>
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
            <tr>
              <td colSpan={9}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                  }}
                >
                  <Select
                    defaultValue={10}
                    options={[
                      { value: 10 },
                      { value: 20 },
                      { value: 30 },
                      { value: data.length },
                    ]}
                    onChange={(e) => handleSelect(e)}
                  />
                  <Pagination
                    defaultCurrent={1}
                    total={data.length}
                    onChange={handleChangePage}
                    pageSize={itemsPerPage}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </T>
      </Container>
    </div>
  );
};

export default Table;

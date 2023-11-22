import React, { useContext, useState } from "react";
import {
  Table,
  Tr,
  Th,
  Td,
  Button,
  Container,
  Icon1,
  Icon3,
  Paginations,
  Header,
  Span,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { PlanContext } from "../../../context/PlanContext";
import { Select } from "antd";

const Year = () => {
  const [data, setData] = useContext(PlanContext);
  const navigate = useNavigate();
  const param = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(10);
  const itemsPerPage = items;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSelect = (e) => {
    setItems(e);
  };

  return (
    <div className="container">
      <Header>
        <div className="title">Годовой план {param.year}</div>
        <Span onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </Span>
      </Header>
      <Container>
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
        <Table>
          <thead>
            <Tr>
              <Th>№</Th>
              <Th>Lokomativ rusimi va raqami</Th>
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
        <Paginations
          defaultCurrent={1}
          total={data.length}
          onChange={handleChangePage}
          pageSize={itemsPerPage}
        />
      </Container>
    </div>
  );
};

export default Year;

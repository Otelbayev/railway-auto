import React, { useEffect, useState } from "react";
import {
  Table as T,
  Tr,
  Th,
  Td,
  Button,
  Container,
  Icon1,
  Icon2,
  Icon3,
  Header,
  Footer,
  Btn,
  Title,
  Epig,
  Bottom,
  Name,
} from "./style";
import { useNavigate } from "react-router-dom";
import { Select, Pagination, Input } from "antd";
import { repair, models } from "../../../mock/mock";
import Cookies from "js-cookie";
import html2pdf from "html2pdf.js";

const Table = () => {
  const [data, setData] = useState([]);

  const [edit, setEdit] = useState(false);

  const year = new Date().getFullYear();
  const navigate = useNavigate();

  //!pagination
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

  useEffect(() => {
    fetch(`/api/anualyplan/getallanualyplantwo?year=${year}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const a = (number) => {
    switch (number) {
      case 1:
        return "Tlektrovoz";
      case 2:
        return "Teplovoz";
      case 3:
        return "Drezina";
    }
  };

  const wrapper = document.getElementById("wrapper");
  const convertToPdf = () => {
    if (wrapper) {
      const pdfOptions = {
        margin: 5,
        filename: `plan${year}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };

      wrapper.style.fontFamily = "Times New Roman";

      html2pdf().from(wrapper).set(pdfOptions).save();
    }
  };
  return (
    <div className="container">
      <Header>
        <div className="title">Yillik Jadval 1.2 - {year}</div>
      </Header>
      <Container>
        <h1>Jasurbek</h1>
      </Container>
    </div>
  );
};

export default Table;

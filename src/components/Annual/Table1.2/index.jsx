import React, { useEffect, useState } from "react";
import { Btn, Header } from "./style";
import { repair, models as model } from "../../../mock/mock";
import Cookies from "js-cookie";
import html2pdf from "html2pdf.js";

const Table = () => {
  const [data, setData] = useState([]);

  let models = model.slice(0, 9);

  const year = new Date().getFullYear();

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

  const filteredData = (name, repair) => {
    let res = data
      .filter(
        (item) =>
          item.locomative_name.name == name && item.reprairtype == repair
      )
      .reduce((a, b) => (a += b.sections_reprair_number), 0);
    if (res === 0) return null;
    return res;
  };

  const Sum = (model) => {
    let count = 0;
    repair.map((item) => {
      count += filteredData(model, item.label);
    });
    return count;
  };

  const Sum1 = (repair) => {
    let count = 0;
    models.map((item) => {
      count += filteredData(item.label, repair);
    });
    return count;
  };

  const totalSum = () => {
    let count = 0;
    models.map((item) => {
      count += Sum(item.label);
    });
    return count;
  };

  return (
    <div className="container">
      <Header>
        <div className="title">Yillik Jadval 1.2 - {year}</div>
      </Header>
      <div className="wrapper">
        <div id="wrapper">
          <div className="doctitle">
            УЭП bo'yicha 2023-yil lokomativlar plani
          </div>
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="th" style={{ width: "120px" }} rowSpan={2}>
                  Ta'mirlash turi
                </th>
                <th className="th" colSpan={20}>
                  Lokomativ seksiyasi
                </th>
              </tr>
              <tr className="tr">
                {models.map(({ value, label }) => {
                  return (
                    <th key={value} className="th">
                      {label}
                    </th>
                  );
                })}
                <th className="th">yig'indi </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr">
                <th className="th">TT-1</th>
                {models.map((item) => {
                  return (
                    <td key={item.value} className="td">
                      {filteredData(item.label, "TT-1")}
                    </td>
                  );
                })}
                <td className="td">{Sum1("TT-1")}</td>
              </tr>
              <tr className="tr">
                <th className="th">TT-2</th>
                {models.map((item) => {
                  return (
                    <td key={item.value} className="td">
                      {filteredData(item.label, "TT-2")}
                    </td>
                  );
                })}
                <td className="td">{Sum1("TT-2")}</td>
              </tr>
              <tr className="tr">
                <th className="th">TIT</th>
                {models.map((item) => {
                  return (
                    <td key={item.value} className="td">
                      {filteredData(item.label, "TIT")}
                    </td>
                  );
                })}
                <td className="td">{Sum1("TIT")}</td>
              </tr>
              <tr className="tr">
                <th className="th">TQT</th>
                {models.map((item) => {
                  return (
                    <td key={item.value} className="td">
                      {filteredData(item.label, "TQT")}
                    </td>
                  );
                })}
                <td className="td">{Sum1("TQT")}</td>
              </tr>
              <tr className="tr">
                <th className="th">TJ-3</th>
                {models.map((item) => {
                  return (
                    <td key={item.value} className="td">
                      {filteredData(item.label, "TJ-3")}
                    </td>
                  );
                })}
                <td className="td">{Sum1("TJ-3")}</td>
              </tr>
              <tr className="tr">
                <th className="th">yig'indi</th>
                {models.map((item) => {
                  return (
                    <td className="td" key={item.value}>
                      {Sum(item.label)}
                    </td>
                  );
                })}
                <td className="td">{totalSum()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer">
          <Btn type="green" onClick={convertToPdf}>
            hujjatni saqlash
          </Btn>
        </div>
      </div>
    </div>
  );
};
export default Table;

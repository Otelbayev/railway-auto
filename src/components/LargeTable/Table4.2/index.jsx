import React from "react";
import { Btn } from "../../Annual/Table1/style";
import html2pdf from "html2pdf.js";

const Table = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const wrapper = document.getElementById("wrapper");

  const convertToPdf = () => {
    if (wrapper) {
      const pdfOptions = {
        margin: 0,
        filename: `plan2024.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      wrapper.style.fontFamily = "Times New Roman";

      document.querySelectorAll(".p").forEach((item) => {
        item.style.fontFamily = "Times New Roman";
      });

      html2pdf().from(wrapper).set(pdfOptions).save();
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <table className="table" border={1}>
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Teplovoz raqami</th>
              <th className="th">Teplovoz seriasi</th>
              <th className="th">Seksiyasi</th>
              <th className="th">Ta'mirlash turi</th>
              <th className="th">Deponing nomi</th>
              <th className="th">Topshirish</th>
              <th className="th">Jo'natish</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e) => (
              <tr className="tr" key={e}>
                <td className="td">{e}</td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td">
                  <Btn type="blue">Jonatish</Btn>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="footer">
          <Btn type="green" onClick={convertToPdf}>
            hujjatni saqlash
          </Btn>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <div className="wrapper" id="wrapper" style={{ border: "none" }}>
          <table className="table" border={1}>
            <thead>
              <tr className="tr">
                <th className="th">№</th>
                <th className="th">Teplovoz raqami</th>
                <th className="th">Teplovoz seriasi</th>
                <th className="th">Seksiyasi</th>
                <th className="th">Ta'mirlash turi</th>
                <th className="th">Deponing nomi</th>
                <th className="th">Topshirish</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((e) => (
                <tr className="tr" key={e}>
                  <td className="td">{e}</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

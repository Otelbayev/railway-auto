import React, { useState } from "react";
import { Btn } from "../../Annual/Table1/style";
import { Radio } from "antd";
import { months } from "../../../mock/mock";
import Cookies from "js-cookie";

const Table = () => {
  const [value, setValue] = useState(Cookies.get("month") || 1);
  return (
    <div className="container">
      <div className="title">Oylik Jadval</div>
      <Radio.Group
        onChange={(e) => {
          Cookies.set("month", e.target.value);
          setValue(e.target.value);
        }}
        style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
      >
        {months.map(({ label, value }) => (
          <Radio.Button key={value} style={{ width: "8%" }} value={value}>
            {label}
          </Radio.Button>
        ))}
      </Radio.Group>
      <div className="wrapper">
        <div className="epig">
          <div>
            <p>"TASDIQLAYMAN"</p>
            <p>"O'zbekiston temir yo'llari" AJ</p>
            <p>Boshqaruv raisi</p>
            <p>_________________ K. U. Xalikov </p>
            <p>"___"_________________2023-yil</p>
          </div>
        </div>
        <div className="doctitle">
          "O'ztemiryolmashta'mir" AJsida tplovozlar ta'mirlashdan chiqarish
          boyicha 2023 yil yanvar oy rejasi
        </div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">Lokomativ turi</th>
              <th className="th">Ta'mirlash turi</th>
              <th className="th">sek/dona</th>
              <th className="th">Yanvar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <th className="th" colSpan={15}>
                Teplovozlar
              </th>
            </tr>
            <tr className="tr">
              <td className="td" rowSpan={2}>
                TEM10
              </td>
              <td className="td">TR-3</td>
              <td className="td">4</td>
              <td className="td">4</td>
            </tr>
            <tr className="tr">
              <td className="td">qisman ta'mirlash</td>
              <td className="td">2</td>
              <td className="td">2</td>
            </tr>
            <tr className="tr">
              <th className="th">JAMI tplovozlar</th>
              <th className="th"></th>
              <th className="th"></th>
              <th className="th"></th>
            </tr>
            <tr className="tr">
              <th className="th" colSpan={15}>
                Elekrtovozlar
              </th>
            </tr>
            <tr className="tr">
              <th className="th">JAMI elektrovozlarv</th>
              <th className="th"></th>
              <th className="th"></th>
              <th className="th"></th>
            </tr>
          </tbody>
        </table>
        <div className="bottom">
          <div className="bottomName">
            Ishlab chiqarish dispetcherlik bo'lim boshlog'i
          </div>
          <div className="bottomName">J.Y. Shomurodov</div>
        </div>
        <div className="footer">
          <Btn type="blue">malumot qo'shish</Btn>
          <Btn type="green">hujjatni saqlash</Btn>
        </div>
      </div>
    </div>
  );
};

export default Table;

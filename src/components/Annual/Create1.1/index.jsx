import React, { useState } from "react";
import { Btn } from "../Table1/style";
import { useNavigate } from "react-router-dom";
import { models, months, repair } from "../../../mock/mock";
import { Input, Select } from "antd";

const Create1 = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({
    anualy_id: 0,
    information_confirmed_date: "2023-12-11T06:15:06.774Z",
    month_plan: {
      yanvar: 0,
      fevral: 0,
      mart: 0,
      aprel: 0,
      may: 0,
      iyun: 0,
      iyul: 0,
      avgust: 0,
      sentyabr: 0,
      oktyabr: 0,
      noyabr: 0,
      dekabr: 0,
    },
  });
  return (
    <div className="container">
      <div className="title">Yillik Jadval 1.1 malumot qo'shish</div>
      <div className="wrapper">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Lokomativ rusumi</th>
              <th className="th">Ta'mirlash turi</th>
              {months.map((item) => {
                return (
                  <th key={item.value} className="th">
                    {item.label}
                  </th>
                );
              })}
              <th className="th">Qo'shish</th>
            </tr>
            <tr className="tr">
              <th className="th">#</th>
              <th className="th">
                <Select options={models} style={{ width: "90px" }} />
              </th>
              <th className="th">
                <Select options={repair} style={{ width: "70px" }} />
              </th>
              {months.map((item) => {
                return (
                  <th className="th" key={item.value}>
                    <Input name={item.label} style={{ width: "60px" }} />
                  </th>
                );
              })}
              <th className="th">
                <Btn type="blue">Qo'shish</Btn>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="bottom">
          <Btn type="red" onClick={() => navigate(-1)}>
            orqaga
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Create1;

import React, { useState } from "react";
import { Btn } from "../Table1/style";
import { useNavigate } from "react-router-dom";
import { models, months, repair } from "../../../mock/mock";
import { Input, Select } from "antd";

const Create1 = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});

  return (
    <div className="container">
      <div className="title">Yillik Jadval 1.1 malumot qo'shish</div>
      <div className="wrapper">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">ID</th>
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
                <Select />
              </th>
              {months.map((item) => {
                return (
                  <th className="th" key={item.value}>
                    <Input
                      type="number"
                      name={item.label}
                      style={{ width: "50px" }}
                    />
                  </th>
                );
              })}
              <th className="th">
                <Btn type="blue" style={{ fontSize: "14px", padding: "4px" }}>
                  Qo'shish
                </Btn>
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

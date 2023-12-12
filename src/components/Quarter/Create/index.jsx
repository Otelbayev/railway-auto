import Cookies from "js-cookie";
import React from "react";
import { models, months, repair } from "../../../mock/mock";
import { Input, Select } from "antd";
import { Btn } from "../../Annual/Table1/style";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        {Cookies.get("quarter") || 1} - chorak malumot qo'shish
      </div>
      <div className="wrapper">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Lokomativ rusumi</th>
              <th className="th">Lokomativ raqami</th>
              <th className="th">Royhatdan o'tgan depo</th>
              <th className="th">Ta'mirlash turi</th>
              <th className="th">Ta'mirdan chiqarish</th>
              <th className="th">Seksiyalar soni</th>
              <th className="th">Qo'shish</th>
            </tr>
            <tr className="tr">
              <th className="th">#</th>
              <th className="th">
                <Select options={models} style={{ width: "100px" }} />
              </th>
              <th className="th">
                № <Input style={{ width: "100px" }} />
              </th>
              <th className="th">
                <Select options={models} style={{ width: "100px" }} />
              </th>
              <th className="th">
                <Select options={repair} style={{ width: "100px" }} />
              </th>
              <th className="th">
                <Select options={months} style={{ width: "100px" }} />
              </th>
              <th className="th">
                <Input style={{ width: "100px" }} />
              </th>
              <th className="th">
                <Btn type="blue">Qo'shish</Btn>
              </th>
            </tr>
          </thead>
        </table>
        <div className="bottom">
          <Btn type="red" onClick={() => navigate(-1)}>
            Orqaga
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Create;

import { Input, Select } from "antd";
import React, { useState } from "react";
import { models, repair } from "../../../mock/mock";
import { Btn } from "../Table1/style";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  elektrovozModel,
  teplovozModel,
  drezinaModel,
} from "../../../mock/mock";

const Create1 = () => {
  const [data, setData] = useState(null);
  const [body, setBody] = useState({
    locomative_name: {
      loco_id: 0,
      name: "string",
      fuel_type: 1,
    },
    all_price: 0,
    sections_reprair_number: 0,
    reprair_type: 1,
    information_confirmed_date: "2023-12-11T05:37:10.217Z",
  });

  const naviagte = useNavigate();

  const addData = async () => {
    try {
      await fetch("/api/anualyplan/createanualyplan", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setData("Malumot muvoffaqiyatli qo'shildi");
    } catch (err) {
      setData("Xatolik yuz berdi");
    }
  };

  const handleChanga = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  const getName = (name) => {
    if (elektrovozModel.includes(name)) return 1;
    if (teplovozModel.includes(name)) return 2;
    if (drezinaModel.includes(name)) return 3;
  };

  return (
    <div className="container">
      <div className="title">Yillik plan qo'shish</div>
      <div className="wrapper">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Lokomativ rusumi</th>
              <th className="th">Ta'mirlash turi</th>
              <th className="th">Seksiyalar soni</th>
              <th className="th">Jami qiymati</th>
              <th className="th">Tahrirlash</th>
            </tr>
            <tr className="tr">
              <th className="th">#</th>
              <th className="th">
                <Select
                  options={models}
                  onChange={(value) =>
                    setBody({
                      ...body,
                      locomative_name: {
                        loco_id: 0,
                        name: value,
                        fuel_type: getName(value),
                      },
                    })
                  }
                  style={{ width: "90px" }}
                />
              </th>
              <th className="th">
                <Select
                  options={repair}
                  onChange={(value) => {
                    setBody({ ...body, reprair_type: value });
                  }}
                  style={{ width: "90px" }}
                />
              </th>
              <th className="th">
                <Input
                  type="text"
                  name="sections_reprair_number"
                  style={{ width: "90px" }}
                  onChange={handleChanga}
                />
              </th>
              <th className="th">
                <Input
                  type="text"
                  name="all_price"
                  style={{ width: "90px" }}
                  onChange={handleChanga}
                />
              </th>
              <th className="th">
                <Btn type="blue" onClick={addData}>
                  Qoshish
                </Btn>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr" style={{ textAlign: "center" }}>
              <td className="td" colSpan={10}>
                {data}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bottom">
          <Btn type="red" onClick={() => naviagte(-1)}>
            oqraga
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Create1;

import Cookies from "js-cookie";
import React, { useState } from "react";
import { models, months, repair, depo } from "../../../mock/mock";
import { Input, Select } from "antd";
import { Btn } from "../../Annual/Table1/style";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [body, setBody] = useState({});

  const onAdd = () => {
    console.log(body);
  };

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
                <Select
                  options={models}
                  onChange={(value) => setBody({ ...body, name: value })}
                  style={{ width: "100px" }}
                />
              </th>
              <th className="th">
                №{" "}
                <Input
                  style={{ width: "100px" }}
                  onChange={({ target: { value } }) =>
                    setBody({ ...body, locomative_number: value })
                  }
                />
              </th>
              <th className="th">
                <Select
                  options={depo}
                  onChange={(value) => setBody({ ...body, depo: value })}
                  style={{ width: "100px" }}
                />
              </th>
              <th className="th">
                <Select
                  options={repair}
                  onChange={(value) => setBody({ ...body, repair: value })}
                  style={{ width: "100px" }}
                />
              </th>
              <th className="th">
                <Select
                  options={months}
                  onChange={(value) =>
                    setBody({ ...body, month_of_reprair: value })
                  }
                  style={{ width: "100px" }}
                />
              </th>
              <th className="th">
                <Input
                  style={{ width: "100px" }}
                  type="number"
                  onChange={({ target: { value } }) =>
                    setBody({ ...body, section_num: Number(value) })
                  }
                />
              </th>
              <th className="th">
                <Btn type="blue" onClick={onAdd}>
                  Qo'shish
                </Btn>
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

import Cookies from "js-cookie";
import React, { useState } from "react";
import { models, months, repair, depo } from "../../../mock/mock";
import { Input, Select } from "antd";
import { Btn } from "../../Annual/Table1/style";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [data, setData] = useState(null);
  const quarter = Number(Cookies.get("quarter")) || 1;

  const getMonth = (quarter) => {
    switch (quarter) {
      case 1:
        return months.slice(0, 3);
      case 2:
        return months.slice(3, 6);
      case 3:
        return months.slice(6, 9);
      case 4:
        return months.slice(9, 12);
    }
  };

  const [body, setBody] = useState({
    organization: {
      org_id: 2,
      type: "Uzbekiston",
    },
    information_confirmed_date: "2023-12-19T19:22:40.745Z",
    quarter,
    plan_year: "2023-12-19T19:22:40.745Z",
    section_0: 0,
  });

  const onAdd = async () => {
    await fetch("/api/quarterplan/createquareterplan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(body),
    });
    setData("Malumot muvoffaqiyatli qo'shildi");
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">{quarter} - chorak malumot qo'shish</div>
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
                  onChange={(value) =>
                    setBody({
                      ...body,
                      locomative_name: {
                        loco_id: 0,
                        name: value,
                        fuel_type: 1,
                      },
                    })
                  }
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
                <Select options={depo} style={{ width: "100px" }} />
              </th>
              <th className="th">
                <Select
                  options={repair}
                  onChange={(value) =>
                    setBody({ ...body, reprair_id: Number(value) })
                  }
                  style={{ width: "100px" }}
                />
              </th>
              <th className="th">
                <Select
                  options={getMonth(quarter)}
                  onChange={(value) =>
                    setBody({ ...body, month_of_reprair: Number(value) })
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
          <tbody>
            {data && (
              <tr className="tr" style={{ textAlign: "center" }}>
                <td className="td" colSpan={10}>
                  {data}
                </td>
              </tr>
            )}
          </tbody>
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

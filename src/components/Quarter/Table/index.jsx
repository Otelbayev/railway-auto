import { Input, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Btn, Icon1, Icon2, Icon3 } from "../../Annual/Table1/style";
import { useNavigate } from "react-router-dom";
import {
  models,
  months,
  repair,
  depo,
  check,
  locomativ,
} from "../../../mock/mock";

const Table = () => {
  const quarter = Number(Cookies.get("quarter")) || 1;

  const [value, setValue] = useState(quarter);

  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  const [body, setBody] = useState({
    organization: {
      org_id: 2,
      type: "Uzbekiston",
    },
    information_confirmed_date: "2023-12-19T20:10:57.481Z",
    quarter: value,
    plan_year: "2023-12-19T20:10:57.481Z",
    section_0: 0,
  });

  const getData = () => {
    fetch(`/api/quarterplan/getallquarterplan?year=2023&quarter=${value}`, {
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getData();
  }, [value]);

  const navigate = useNavigate();

  const onSave = async (id) => {
    setEdit(false);
    await fetch(`/api/quarterplan/updatequarterplan/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(body),
    }).catch((err) => {
      console.log("error");
    });
    getData();
  };

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

  return (
    <div className="container">
      <div className="title">{value} - Chorak</div>
      <Radio.Group
        onChange={(e) => {
          Cookies.set("quarter", e.target.value);
          setValue(e.target.value);
        }}
        value={value}
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <Radio.Button style={{ width: "25%" }} value={1}>
          1 - Chorak
        </Radio.Button>
        <Radio.Button style={{ width: "25%" }} value={2}>
          2 - Chorak
        </Radio.Button>
        <Radio.Button style={{ width: "25%" }} value={3}>
          3 - Chorak
        </Radio.Button>
        <Radio.Button style={{ width: "25%" }} value={4}>
          4 - Chorak
        </Radio.Button>
      </Radio.Group>
      <div className="wrapper">
        <div className="epig">
          <div>
            <p>"TASDIQLAYMAN"</p>
            <p>"O'zbekiston temir yo'llari" AJ</p>
            <p>bosh menejer- bosh muhandis a.b</p>
            <p>_________________ Z.E.Maxamatov</p>
            <p>"___"_________________ 2023yil</p>
          </div>
        </div>
        <div className="doctitle">
          2023 yilning {value} - choragi uchun "O'ztemiryo'lmashta'mir"
          aksiyadorlik jamiyati ==|==|== lokomativ depolarida === xajmida
          kapital ta'mirlash hamda +++++ xajmida joriy ta'mirlashda joriy
          ta'mirdan chiqarish jadvali
        </div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Lokomativ rusumi va raqami</th>
              <th className="th">Lokomativ royhatdan o'tgan depo</th>
              <th className="th">Ta'mirlash turi</th>
              <th className="th">Ta'mirdan chiqishi</th>
              <th className="th">Seksiyalar soni</th>
              <th className="th">Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map(
                (
                  {
                    locomative_name,
                    locomative_number,
                    organization,
                    reprair_type,
                    monthofreprair,
                    section_num,
                    quarter_id,
                  },
                  index
                ) => (
                  <tr key={index} className="tr">
                    <td className="td">{index + 1}</td>
                    <td className="td">
                      {" "}
                      {edit === quarter_id ? (
                        <>
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
                            style={{ width: "80px" }}
                          />
                          <Input
                            style={{ width: "70px" }}
                            onChange={({ target: { value } }) =>
                              setBody({ ...body, locomative_number: value })
                            }
                          />
                        </>
                      ) : (
                        `${locomative_name.name} ${locomative_number}`
                      )}
                    </td>
                    <td className="td">
                      {edit === quarter_id ? (
                        <Select options={depo} style={{ width: "115px" }} />
                      ) : (
                        organization.type
                      )}
                    </td>
                    <td className="td">
                      {edit === quarter_id ? (
                        <Select
                          style={{ width: "70px" }}
                          onChange={(value) =>
                            setBody({ ...body, reprair_id: Number(value) })
                          }
                          options={repair}
                        />
                      ) : (
                        reprair_type
                      )}
                    </td>
                    <td className="td">
                      {" "}
                      {edit === quarter_id ? (
                        <Select
                          style={{ width: "80px" }}
                          onChange={(value) =>
                            setBody({
                              ...body,
                              month_of_reprair: Number(value),
                            })
                          }
                          options={getMonth(quarter)}
                        />
                      ) : (
                        monthofreprair
                      )}
                    </td>
                    <td className="td">
                      {edit === quarter_id ? (
                        <Input
                          style={{ width: "70px" }}
                          type="number"
                          onChange={({ target: { value } }) =>
                            setBody({ ...body, section_num: Number(value) })
                          }
                        />
                      ) : (
                        section_num
                      )}
                    </td>
                    <td className="td">
                      {edit === quarter_id ? (
                        <>
                          <Button
                            type="green"
                            onClick={() => onSave(quarter_id)}
                          >
                            <Icon2 />
                          </Button>
                          <Button type="red" onClick={() => setEdit(false)}>
                            <Icon3 />
                          </Button>
                        </>
                      ) : (
                        <Button type="gold" onClick={() => setEdit(quarter_id)}>
                          <Icon1 />
                        </Button>
                      )}
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr className="tr" style={{ textAlign: "center" }}>
                <td className="td" colSpan={10}>
                  Hech narsa topilmadi
                </td>
              </tr>
            )}
            <tr className="tr">
              <td className="td" colSpan={9}>
                <div className="bottom">
                  <div className="bottomName">
                    Lokomativlardan foydalanish boshqarmasi boshlig'i:
                  </div>
                  <div className="bottomName">N.O.Ramatov</div>
                </div>
                <div className="bottom">
                  <div className="bottomName">
                    Ishlab chiqarish boyicha bosh distpecherlik bo'lim boshligi:
                  </div>
                  <div className="bottomName">J.Y.Shomurodov</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="footer">
          <Btn type="blue" onClick={() => navigate("/quarter-add-1")}>
            ma'lumot qo'shish
          </Btn>
          <Btn type="green" disabled={data.length > 0 ? false : true}>
            hujjatni saqlash
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Table;

import React, { useEffect, useState } from "react";
import { Btn, Button, Icon1 } from "../../Annual/Table1/style";
import { Radio } from "antd";
import { months, getMonth, getQuarter } from "../../../mock/mock";
import Cookies from "js-cookie";

const Table = () => {
  const month = Number(Cookies.get("month"));
  const [value, setValue] = useState(month || 1);
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      `/api/MonthPlan/getallmonthplan?year=2023&quarter=${getQuarter(
        month
      )}&month=${month}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getData();
  }, [month]);

  return (
    <div className="container">
      <div className="title">Oylik Jadval</div>
      <Radio.Group
        onChange={(e) => {
          Cookies.set("month", e.target.value);
          setValue(e.target.value);
        }}
        value={value}
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
          boyicha 2023 yil {getMonth(month)} oy rejasi
        </div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">Lokomativ turi</th>
              <th className="th">Ta'mirlash turi</th>
              <th className="th">sek/dona</th>
              <th className="th">{getMonth(month)}</th>
              {data.length !== 0 && <th className="th">Tahrirlash</th>}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr className="tr">
                <td className="td" colSpan={20}>
                  Hech narsa topilmadi.
                </td>
              </tr>
            ) : (
              data.map(
                (
                  {
                    quarterPlanTwo: {
                      section_num,
                      reprair_type,
                      locomative_number,
                      locomative_name,
                    },
                  },
                  index
                ) => (
                  <React.Fragment key={index}>
                    <tr className="tr">
                      <td className="td" rowSpan={2}>
                        {locomative_name?.name}
                      </td>
                      <td className="td">{reprair_type}</td>
                      <td className="td">{section_num}</td>
                      <td className="td">{locomative_number}</td>
                      <td className="td" rowSpan={2}>
                        <Button type="gold">
                          <Icon1 />
                        </Button>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="td">gbg</td>
                      <td className="td">gbg</td>
                      <td className="td">gbg</td>
                    </tr>
                  </React.Fragment>
                )
              )
            )}
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
          <Btn type="green" disabled={data.length === 0 ? true : false}>
            hujjatni saqlash
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Table;

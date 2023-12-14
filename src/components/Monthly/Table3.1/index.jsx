import { Radio } from "antd";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { months, getMonth, getQuarter } from "../../../mock/mock";
import { Btn } from "../../Annual/Table1/style";

const Table2 = () => {
  const month = Number(Cookies.get("month"));
  const [value, setValue] = useState(month || 1);
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      `/api/MonthPlan/getallmonthplanone?year=2023&quarter=${getQuarter(
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

  console.log(data);

  return (
    <div className="container">
      <div className="title">Oylik Jadval 2</div>
      <Radio.Group
        onChange={(e) => {
          Cookies.set("month", e.target.value);
          setValue(e.target.value);
        }}
        value={value}
        style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
      >
        {months.map(({ value, label }) => (
          <Radio.Button style={{ width: "8%" }} value={value} key={value}>
            {label}
          </Radio.Button>
        ))}
      </Radio.Group>
      <div className="wrapper">
        <div className="epig">
          <div>
            <p>TASDIQLAYMAN</p>
            <p>"O'ZTEMIRYO'LMASHTA'MIR" AJsi</p>
            <p>Bosh direktori</p>
            <p></p>
            <p>_______________ K.U. Xalikov</p>
          </div>
        </div>
        <div className="doctitle">
          Asosiy turdagi maxsulotlarni ishlab chiqarish rejasi 2023 yil{" "}
          {getMonth(month)} oyi uchun
        </div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th" rowSpan={2}>
                Tsexlar
              </th>
              <th className="th" rowSpan={2}>
                Nomlanishlar
              </th>
              <th style={{ width: "100px" }} className="th" rowSpan={2}>
                O'lchov birligi
              </th>
              <th className="th" style={{ width: "100px" }} rowSpan={2}>
                soni
              </th>
              <th className="th" colSpan={5}>
                teplovoz elektrovoz seriya bo'yicha
              </th>
            </tr>
            {data.length !== 0 && (
              <tr className="tr">
                {data.map((e) => (
                  <td className="td" key={e.month_id}>
                    {e.quarterPlanTwo.locomative_name.name}
                  </td>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr className="tr">
                <td className="td" colSpan={20}>
                  Hech narsa topilmadi
                </td>
              </tr>
            ) : (
              <>
                {/* //! lokomativ tsexi */}
                <tr className="tr">
                  <th className="th" rowSpan={6}>
                    Lokomativ tsexi
                  </th>
                  <td className="td">Teplovoz va elektrovozlarni topshirish</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Reostat sinovlari</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">a) ramani ko'tarish</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">b) yuvilgandan keyin ramani uzatish</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Elektrovizni topshirish</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Maxsus.vagon+platforma</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                {/* //! EL.mashina tsexi */}
                <tr className="tr">
                  <th className="th" rowSpan={4}>
                    EL.mashina tsexi
                  </th>
                  <td className="td">
                    Teplovoz + elektrovoz ВЛ60+ВЛ80 uchun TED ni ta'mirlash
                  </td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    Teplovoz uchun bosh generatorni ta'mirlash
                  </td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    Teplovoz uchun 2 mash.agregatni ta'mirlash
                  </td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Elektrovozni topshirish</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>

                {/*//! Elektrapparat tsexi */}
                <tr className="tr">
                  <th className="th" rowSpan={2}>
                    Elektrapparat tsexi
                  </th>
                  <td className="td">
                    Teplovoz + elektrovoz uchun el.sxema yig'ish
                  </td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Maxsus.vagon</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                {/* //! Dizel tsexi */}
                <tr className="tr">
                  <th className="th" rowSpan={3}>
                    Dizel tsexi
                  </th>
                  <td className="td">Dizelni qismlarga ajratish</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Teplovoz uchun dizellarni ta'mirlash</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    Teplovoz uchun dizellarni sinovdan o'tkazish
                  </td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                {/* //! Ta'mirlov butlov tsexi */}
                <tr className="tr">
                  <th className="th" rowSpan={3}>
                    Ta'mirlov butlov tsexi
                  </th>
                  <td className="td">Teplovoz + elektrovoz telejka ta'mir</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    Teplovoz + elektrovoz reduktorini ta'mirlash
                  </td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Dizel bloklarini ta'mirlash</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                {/*//! G'ildirak tsexi */}
                <tr className="tr">
                  <th className="th" rowSpan={6}>
                    G'ildirak tsexi
                  </th>
                  <td className="td">G'ildirak juftliklari ta'miri</td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    Teplovoz + elektrovoz ВЛ60 + ВЛ80 + O'z-Y
                  </td>
                  <td className="td">sek</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Teplovoz g'ildirak jufti</td>
                  <td className="td">g/j</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Elektrovoz g'ildirak jufti</td>
                  <td className="td">g/j</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Elektropoezd g'ildirak jufti</td>
                  <td className="td">g/j</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
                <tr className="tr">
                  <td className="td">Vagon g'ildirak jufti</td>
                  <td className="td">g/j</td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                  <td className="td"></td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <div className="bottom">
          <div className="bottomName">Bosh muhandis:</div>
          <div className="bottomName">S.R. Muxammaddinov</div>
        </div>
        <div className="bottom">
          <div className="bottomName">
            Ishlab chiqarish boyicha bosh direktor o'rinbosari:
          </div>
          <div className="bottomName">N.O. Ramatov</div>
        </div>
        <div className="bottom">
          <div className="bottomName">
            Ishalab chiqarish dispetcher bo'lim boshlog'i:
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

export default Table2;

import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Btn, Icon1 } from "../../Annual/Table1/style";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [value, setValue] = useState(Number(Cookies.get("quarter")) || 1);

  const [data, setData] = useState([]);

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
              <th className="th">Lokomativ rusui va raqami</th>
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
                  },
                  index
                ) => (
                  <tr key={locomative_name.loco_id} className="tr">
                    <td className="td">{index + 1}</td>
                    <td className="td">
                      {locomative_name.name} {locomative_number}
                    </td>
                    <td className="td">{organization.type}</td>
                    <td className="td">{reprair_type}</td>
                    <td className="td">{monthofreprair}</td>
                    <td className="td">{section_num}</td>
                    <td className="td">
                      <Button type="gold">
                        <Icon1 />
                      </Button>
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

import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Btn } from "../../Annual/Table1/style";
import { useNavigate } from "react-router-dom";
import { months, repair } from "../../../mock/mock";
import html2pdf from "html2pdf.js";

const Table = () => {
  const [value, setValue] = useState(Number(Cookies.get("quarter")) || 1);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  const getData = () => {
    fetch(`/api/quarterplan/getallquarterplantwo?year=2023&quarter=${value}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getData();
  }, [value]);

  const getABC = (a1, a2, a3, a4) => {};

  const wrapper = document.getElementById("wrapper");

  const convertToPdf = () => {
    if (wrapper) {
      const pdfOptions = {
        margin: 5,
        filename: `plan2024.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      wrapper.style.fontFamily = "Times New Roman";

      document.querySelectorAll(".p").forEach((item) => {
        item.style.fontFamily = "Times New Roman";
      });

      html2pdf().from(wrapper).set(pdfOptions).save();
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
        style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
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
            <p>"O'zbekiston temir yo'llari" AJ</p>
            <p>Bosh direktor</p>
            <p>_________________ K.U.Xalikov</p>
            <p>"___"_________________2024yil</p>
          </div>
        </div>
        <div className="doctitle">
          "O'ztemiryo'lmashta'mir" AJsida tplovozlar, elektrovozlarni
          ta'mirlashdan chiqarish bo'yicha 2024-yil {value} - choragi uchun{" "}
          <div>reja</div>
        </div>
        <table className="table" border={1}>
          <thead>
            <tr className="tr">
              <th className="th" rowSpan={2}></th>
              <th className="th" rowSpan={2}>
                Lokomativ seriasi
              </th>
              <th className="th" rowSpan={2}>
                Ta'mirlash turi
              </th>
              <th className="th" rowSpan={2}>
                2023 yil uchun reja
              </th>
              <th className="th" rowSpan={2}>
                2023 yik {Cookies.get("quarter") || 1} chokagi uchun reja
              </th>
              {getMonth(quarter).map(({ label, value }) => (
                <th key={value} className="th" colSpan={2}>
                  {label} 2023 yil
                </th>
              ))}
            </tr>
            <tr className="tr">
              <th className="th">rejasi</th>
              <th className="th">№</th>
              <th className="th">rejasi</th>
              <th className="th">№</th>
              <th className="th">rejasi</th>
              <th className="th">№</th>
            </tr>
            <tr className="tr">
              <th className="th" colSpan={20}>
                AO "O'zbekiston temir yo'llari"
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length !== 0 ? (
              data.map(
                ({
                  q_pt_id,
                  quarter_plan: {
                    locomative_name,
                    reprair_type,
                    section_num,
                    locomative_number,
                  },
                  section_1,
                  section_2,
                  section_3,
                  section_4,
                }) => {
                  return (
                    <tr key={q_pt_id} className="tr">
                      <td className="td"></td>
                      <td className="td">{locomative_name?.name}</td>
                      <td className="td">{reprair_type}</td>
                      <td className="td"></td>
                      <td className="td"></td>
                      <td className="td"></td>
                      <td className="td"></td>
                      <td className="td">{section_num}</td>
                      <td className="td">
                        {locomative_number}{" "}
                        {getABC(section_1, section_2, section_3, section_4)}{" "}
                      </td>
                      <td className="td"></td>
                      <td className="td"></td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr className="tr" style={{ textAlign: "center" }}>
                <td className="td" colSpan={15}>
                  Hech narsa topilmadi
                </td>
              </tr>
            )}
            <tr className="tr">
              <td className="td" colSpan={15}>
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
          <Btn type="blue" onClick={() => navigate("/quarter-add-2")}>
            ma'lumot qo'shish
          </Btn>
          <Btn
            type="green"
            onClick={convertToPdf}
            disabled={data.length ? false : true}
          >
            hujjatni saqlash
          </Btn>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <div className="wrapper" id="wrapper" style={{ border: "none" }}>
          <div className="epig">
            <div>
              <p>"O'zbekiston temir yo'llari" AJ</p>
              <p>Bosh direktor</p>
              <p>_________________ K.U.Xalikov</p>
              <p>"___"_________________2024yil</p>
            </div>
          </div>
          <div className="doctitle">
            "O'ztemiryo'lmashta'mir" AJsida tplovozlar, elektrovozlarni
            ta'mirlashdan chiqarish bo'yicha 2024-yil {value} - choragi uchun{" "}
            <div>reja</div>
          </div>
          <table className="table" border={1}>
            <thead>
              <tr className="tr">
                <th className="th" rowSpan={2}></th>
                <th className="th" rowSpan={2}>
                  Lokomativ seriasi
                </th>
                <th className="th" rowSpan={2}>
                  Ta'mirlash turi
                </th>
                <th className="th" rowSpan={2}>
                  2023 yil uchun reja
                </th>
                <th className="th" rowSpan={2}>
                  2023 yik {Cookies.get("quarter") || 1} chokagi uchun reja
                </th>
                {getMonth(quarter).map(({ label, value }) => (
                  <th key={value} className="th" colSpan={2}>
                    {label} 2023 yil
                  </th>
                ))}
              </tr>
              <tr className="tr">
                <th className="th">rejasi</th>
                <th className="th">№</th>
                <th className="th">rejasi</th>
                <th className="th">№</th>
                <th className="th">rejasi</th>
                <th className="th">№</th>
              </tr>
              <tr className="tr">
                <th className="th" colSpan={20}>
                  AO "O'zbekiston temir yo'llari"
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length !== 0 ? (
                data.map(
                  ({
                    q_pt_id,
                    quarter_plan: {
                      locomative_name,
                      reprair_type,
                      section_num,
                      locomative_number,
                    },
                    section_1,
                    section_2,
                    section_3,
                    section_4,
                  }) => {
                    return (
                      <tr key={q_pt_id} className="tr">
                        <td className="td"></td>
                        <td className="td">{locomative_name?.name}</td>
                        <td className="td">{reprair_type}</td>
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td">{section_num}</td>
                        <td className="td">
                          {locomative_number}{" "}
                          {getABC(section_1, section_2, section_3, section_4)}{" "}
                        </td>
                        <td className="td"></td>
                        <td className="td"></td>
                      </tr>
                    );
                  }
                )
              ) : (
                <tr className="tr" style={{ textAlign: "center" }}>
                  <td className="td" colSpan={15}>
                    Hech narsa topilmadi
                  </td>
                </tr>
              )}
              <tr className="tr">
                <td className="td" colSpan={15}>
                  <div className="bottom">
                    <div className="bottomName">
                      Lokomativlardan foydalanish boshqarmasi boshlig'i:
                    </div>
                    <div className="bottomName">N.O.Ramatov</div>
                  </div>
                  <div className="bottom">
                    <div className="bottomName">
                      Ishlab chiqarish boyicha bosh distpecherlik bo'lim
                      boshligi:
                    </div>
                    <div className="bottomName">J.Y.Shomurodov</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

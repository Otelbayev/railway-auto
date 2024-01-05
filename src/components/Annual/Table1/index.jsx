import React, { useEffect, useState } from "react";
import {
  Button,
  Icon1,
  Icon2,
  Icon3,
  Header,
  Footer,
  Btn,
  Title,
  Epig,
  Bottom,
  Name,
} from "./style";
import { useNavigate } from "react-router-dom";
import { Select, Pagination, Input } from "antd";
import {
  models,
  repair,
  teplovozModel,
  elektrovozModel,
  drezinaModel,
} from "../../../mock/mock";
import Cookies from "js-cookie";
import html2pdf from "html2pdf.js";

const Table = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  const [body, setBody] = useState({
    locomative_name: {
      loco_id: 0,
      name: "string",
      fuel_type: 1,
    },
    all_price: 0,
    sections_reprair_number: 0,
    reprair_type: 1,
    information_confirmed_date: "2023-12-10T22:16:02.828Z",
  });

  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const getData = () => {
    fetch(`/api/anualyplan/getallanualyplan?year=${year}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getData();
  }, []);

  const a = (number) => {
    switch (number) {
      case 1:
        return "Elektrovoz";
      case 2:
        return "Teplovoz";
      case 3:
        return "Drezina";
    }
  };

  const getName = (name) => {
    if (elektrovozModel.includes(name)) return 1;
    if (teplovozModel.includes(name)) return 2;
    if (drezinaModel.includes(name)) return 3;
  };

  const wrapper = document.getElementById("wrapper");

  const convertToPdf = () => {
    if (wrapper) {
      const pdfOptions = {
        margin: 5,
        filename: `plan${year}.pdf`,
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

  const handelChange = ({ target: { name, value } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSave = async (id) => {
    await fetch(`/api/anualyplan/updateanualyplan/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(body),
    });
    setEdit(false);
    getData();
  };

  return (
    <div className="container">
      <Header>
        <div className="title">Yillik Prognoz - {year}</div>
      </Header>
      <div className="wrapper">
        <div className="epig">
          <div>
            <p>"TASDIQLAYMAN"</p>
            <p>"O'zbekiston temir yo'llari" AJ</p>
            <p>bosh menejer- bosh muhandis a.b</p>
            <p>_________________ Z.E.Maxamatov</p>
            <p>"___"_________________yil</p>
          </div>
        </div>
        <div className="doctitle">
          Lokomativlardan foydalanish boshqarmasining 2024 yilga mo'ljallangan
          joriy, kapital va xizmat muddati uzaytirilgan holda kapital ta'mirlash
          uchun yillik
          <div>prognoz</div>
        </div>
        <table className="table" border={1}>
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Lokomativ va ta'mir turi</th>
              <th className="th">{year} yilga reja (seksiya)</th>
              <th className="th">Jami qiymati</th>
              <th className="th">Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            {data.length !== 0 ? (
              data.map(
                (
                  {
                    all_price,
                    anualy_id,
                    reprairtype,
                    sections_reprair_number,
                    locomative_name,
                  },
                  index
                ) => {
                  return (
                    <tr className="tr" key={anualy_id}>
                      <td className="td">{index + 1}</td>
                      <td className="td">
                        {edit === anualy_id ? (
                          <>
                            <Select
                              options={models}
                              defaultValue={locomative_name?.name}
                              onChange={(value) => {
                                setBody({
                                  ...body,
                                  locomative_name: {
                                    loco_id: locomative_name?.loco_id,
                                    name: value,
                                    fuel_type: getName(value),
                                  },
                                });
                              }}
                            />
                            <Select
                              options={repair}
                              defaultValue={reprairtype}
                              onChange={(value) =>
                                setBody({ ...body, reprair_type: value })
                              }
                            />
                          </>
                        ) : (
                          <>
                            {locomative_name?.name}{" "}
                            {a(locomative_name?.fuel_type)} {reprairtype}
                          </>
                        )}
                      </td>
                      <td className="td">
                        {edit === anualy_id ? (
                          <Input
                            style={{ width: "80px" }}
                            defaultValue={sections_reprair_number}
                            name="sections_reprair_number"
                            onChange={handelChange}
                          />
                        ) : (
                          sections_reprair_number
                        )}
                      </td>
                      <td className="td">
                        {edit === anualy_id ? (
                          <Input
                            style={{ width: "80px" }}
                            defaultValue={all_price}
                            name="all_price"
                            onChange={handelChange}
                          />
                        ) : (
                          all_price
                        )}
                      </td>
                      <td className="td">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                            width: "100%",
                          }}
                        >
                          {edit === anualy_id ? (
                            <>
                              <Button
                                onClick={() => onSave(anualy_id)}
                                type="green"
                              >
                                <Icon2 />
                              </Button>
                              <Button type="red" onClick={() => setEdit(false)}>
                                <Icon3 />
                              </Button>
                            </>
                          ) : (
                            <Button
                              type="gold"
                              onClick={() => {
                                setEdit(anualy_id);
                              }}
                            >
                              <Icon1 />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr className="tr">
                <td className="td" colSpan={5}>
                  hech narsa topilmadi
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
          <Btn type="blue" onClick={() => navigate("/annual-add-1")}>
            ma'lumot qo'shish
          </Btn>
          <Btn type="green" onClick={convertToPdf}>
            hujjatni saqlash
          </Btn>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <div
          className="wrapper"
          style={{
            border: "none",
          }}
          id="wrapper"
        >
          <Epig>
            <div>
              <p className="p">"TASDIQLAYMAN"</p>
              <p className="p">"O'zbekiston temir yo'llari" AJ</p>
              <p className="p">bosh menejer- bosh muhandis a.b</p>
              <p className="p">_________________ Z.E.Maxamatov</p>
              <p className="p">"___"_________________yil</p>
            </div>
          </Epig>
          <Title className="p">
            Lokomativlardan foydalanish boshqarmasining 2024 yilga mo'ljallangan
            joriy, kapital va xizmat muddati uzaytirilgan holda kapital
            ta'mirlash uchun yillik
            <div className="p">prognoz</div>
          </Title>
          <table className="table" border={1}>
            <thead>
              <tr className="tr">
                <th className="th">№</th>
                <th className="p">Lokomativ va ta'mir turi</th>
                <th className="p">{year} yilga reja (seksiya)</th>
                <th className="p">Jami qiymati</th>
              </tr>
            </thead>
            <tbody>
              {data.length !== 0 ? (
                data.map(
                  (
                    {
                      all_price,
                      anualy_id,
                      reprairtype,
                      sections_reprair_number,
                      locomative_name,
                    },
                    index
                  ) => {
                    return (
                      <tr className="tr" key={anualy_id}>
                        <td className="p td">{index + 1}</td>
                        <td className="p td">
                          {locomative_name?.name}
                          {a(locomative_name?.fuel_type)} {reprairtype}
                        </td>
                        <td className="p td">{sections_reprair_number}</td>
                        <td className="p td">{all_price}</td>
                      </tr>
                    );
                  }
                )
              ) : (
                <tr className="tr">
                  <td className="p td" colSpan={5}>
                    hech narsa topilmadi
                  </td>
                </tr>
              )}
              <tr className="tr">
                <td colSpan={9}>
                  <Bottom>
                    <Name className="p">
                      Lokomativlardan foydalanish boshqarmasi boshlig'i:
                    </Name>
                    <Name className="p">N.O.Ramatov</Name>
                  </Bottom>
                  <Bottom>
                    <Name className="p">
                      Ishlab chiqarish boyicha bosh distpecherlik bo'lim
                      boshligi:
                    </Name>
                    <Name className="p">J.Y.Shomurodov</Name>
                  </Bottom>
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

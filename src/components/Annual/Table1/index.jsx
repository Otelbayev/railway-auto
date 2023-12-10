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
import { models, repair } from "../../../mock/mock";
import Cookies from "js-cookie";
import html2pdf from "html2pdf.js";

const Table = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  const year = new Date().getFullYear();
  const navigate = useNavigate();

  //!pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(10);
  const itemsPerPage = items;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  const handleSelect = (e) => {
    setItems(e);
  };

  //!filter
  // const initialState = {
  //   id: query.get("id") || null,
  //   number: query.get("number") || null,
  //   section: query.get("section") || null,
  //   model: query.get("model") || null,
  //   depos: query.get("depos") || null,
  //   repairMode: query.get("repairMode") || null,
  //   repairPlace: query.get("repairPlace") || null,
  //   outRepair: query.get("outRepair") || null,
  // };

  // const [formData, setFormData] = useState(initialState);

  // const onInputChange = ({ target: { value, name } }) => {
  //   setFormData({ ...formData, [name]: value });
  //   navigate(`${location?.pathname}${useReplace(name, value)}`);
  // };
  // const onSelectionChange = (value, type) => {
  //   setFormData({ ...formData, [type]: value });
  //   navigate(`${location.pathname}${useReplace(type, value)}`);
  // };

  // const onCancle = () => {
  //   navigate(`${location.pathname}`);
  //   setFormData({
  //     id: null,
  //     number: null,
  //     section: null,
  //     model: null,
  //     depos: null,
  //     repairMode: null,
  //     repairPlace: null,
  //     outRepair: null,
  //   });
  // };

  useEffect(() => {
    fetch(`/api/anualyplan/getallanualyplan?year=${year}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [year]);

  const a = (number) => {
    switch (number) {
      case 1:
        return "Tlektrovoz";
      case 2:
        return "Teplovoz";
      case 3:
        return "Drezina";
    }
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

  const onSave = (id) => {};

  return (
    <div className="container">
      <Header>
        <div className="title">Yillik Prognoz - {year}</div>
      </Header>
      <div className="wrapper">
        <Epig>
          <div>
            <p>"TASDIQLAYMAN"</p>
            <p>"O'zbekiston temir yo'llari" AJ</p>
            <p>bosh menejer- bosh muhandis a.b</p>
            <p>_________________ Z.E.Maxamatov</p>
            <p>"___"_________________yil</p>
          </div>
        </Epig>
        <Title>
          Lokomativlardan foydalanish boshqarmasining 2023 yilga mo'ljallangan
          joriy, kapital va xizmat muddati uzaytirilgan holda kapital ta'mirlash
          uchun yillik
          <div>prognoz</div>
        </Title>
        <table className="table">
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
            {currentData.length !== 0 ? (
              currentData.map(
                ({
                  all_price,
                  anualy_id,
                  reprairtype,
                  sections_reprair_number,
                  locomative_name,
                }) => {
                  return (
                    <tr className="tr" key={anualy_id}>
                      <td className="td">{anualy_id}</td>
                      <td className="td">
                        {edit === anualy_id ? (
                          <>
                            <Select
                              options={models}
                              defaultValue={locomative_name?.name}
                            />
                            {"  "}
                            {a(locomative_name?.fuel_type)}
                            {"  "}
                            <Select
                              options={repair}
                              defaultValue={reprairtype}
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
                              onClick={() => setEdit(anualy_id)}
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
                <Bottom>
                  <Name>
                    Lokomativlardan foydalanish boshqarmasi boshlig'i:
                  </Name>
                  <Name>N.O.Ramatov</Name>
                </Bottom>
                <Bottom>
                  <Name>
                    Ishlab chiqarish boyicha bosh distpecherlik bo'lim boshligi:
                  </Name>
                  <Name>J.Y.Shomurodov</Name>
                </Bottom>
              </td>
            </tr>
            <tr className="tr">
              <td className="td" colSpan={9}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                  }}
                >
                  <Select
                    defaultValue={10}
                    options={[
                      { value: 10 },
                      { value: 20 },
                      { value: 30 },
                      { value: data.length },
                    ]}
                    onChange={(e) => handleSelect(e)}
                  />
                  <Pagination
                    defaultCurrent={1}
                    total={data.length}
                    onChange={handleChangePage}
                    pageSize={itemsPerPage}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Footer>
          <Btn type="blue" onClick={() => navigate("/annual-add-1")}>
            ma'lumot qo'shish
          </Btn>
          <Btn type="green" onClick={convertToPdf}>
            hujjatni saqlash
          </Btn>
        </Footer>
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
            Lokomativlardan foydalanish boshqarmasining 2023 yilga mo'ljallangan
            joriy, kapital va xizmat muddati uzaytirilgan holda kapital
            ta'mirlash uchun yillik
            <div className="p">prognoz</div>
          </Title>
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="th">№</th>
                <th className="p">Lokomativ va ta'mir turi</th>
                <th className="p">{year} yilga reja (seksiya)</th>
                <th className="p">Jami qiymati</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length !== 0 ? (
                currentData.map(
                  ({
                    all_price,
                    anualy_id,
                    reprairtype,
                    sections_reprair_number,
                    locomative_name,
                  }) => {
                    return (
                      <tr className="tr" key={anualy_id}>
                        <td className="p td">{anualy_id}</td>
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

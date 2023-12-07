import React, { useEffect, useState } from "react";
import {
  Table as T,
  Tr,
  Th,
  Td,
  Button,
  Container,
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

  console.log(data);

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

  return (
    <div className="container">
      <Header>
        <div className="title">Yillik Prognoz - {year}</div>
      </Header>
      <Container>
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
        <T>
          <thead>
            <Tr>
              <Th>№</Th>
              <Th>Lokomativ va ta'mir turi</Th>
              <Th>{year} yilga reja (seksiya)</Th>
              <Th>Jami qiymati</Th>
              <Th>Tahrirlash</Th>
            </Tr>
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
                    <Tr key={anualy_id}>
                      <Td>{anualy_id}</Td>
                      <Td>
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
                      </Td>
                      <Td>
                        {edit === anualy_id ? (
                          <Input
                            style={{ width: "80px" }}
                            defaultValue={sections_reprair_number}
                          />
                        ) : (
                          sections_reprair_number
                        )}
                      </Td>
                      <Td>
                        {edit === anualy_id ? (
                          <Input
                            style={{ width: "80px" }}
                            defaultValue={all_price}
                          />
                        ) : (
                          all_price
                        )}
                      </Td>
                      <Td>
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
                              <Button type="green">
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
                      </Td>
                    </Tr>
                  );
                }
              )
            ) : (
              <Tr>
                <Td colSpan={5}>hech narsa topilmadi</Td>
              </Tr>
            )}
            <tr>
              <td colSpan={9}>
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
            <tr>
              <td colSpan={9}>
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
        </T>
        <Footer>
          <Btn type="blue" onClick={() => navigate("/annual-add-1")}>
            ma'lumot qo'shish
          </Btn>
          <Btn type="green" onClick={convertToPdf}>
            hujjatni saqlash
          </Btn>
        </Footer>
      </Container>
      <div style={{ display: "none" }}>
        <Container
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
          <T>
            <thead>
              <Tr>
                <Th>№</Th>
                <Th className="p">Lokomativ va ta'mir turi</Th>
                <Th className="p">{year} yilga reja (seksiya)</Th>
                <Th className="p">Jami qiymati</Th>
              </Tr>
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
                      <Tr key={anualy_id}>
                        <Td className="p">{anualy_id}</Td>
                        <Td className="p">
                          {locomative_name?.name}{" "}
                          {a(locomative_name?.fuel_type)} {reprairtype}
                        </Td>
                        <Td className="p">{sections_reprair_number}</Td>
                        <Td className="p">{all_price}</Td>
                      </Tr>
                    );
                  }
                )
              ) : (
                <Tr>
                  <Td className="p" colSpan={5}>
                    hech narsa topilmadi
                  </Td>
                </Tr>
              )}
              <tr>
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
          </T>
        </Container>
      </div>
    </div>
  );
};

export default Table;

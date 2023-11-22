import React, { useContext } from "react";
import { Container, Wrapper, Table, Top, Title } from "./style";
import html2pdf from "html2pdf.js";
import { useParams } from "react-router-dom";
import { PlanContext } from "../../../context/PlanContext";

const Doc = () => {
  const param = useParams();
  const [data] = useContext(PlanContext);
  const res = data.filter(
    (item) =>
      item.model === "3ВЛ80с" ||
      item.model === "ВЛ60к" ||
      item.model === "2ВЛ60с" ||
      item.model === "O'Z-EL"
  );
  const res1 = data.filter(
    (item) => item.model === "UzTE16M2" || item.model.includes("ТЭ10М")
  );
  const res2 = data.filter((item) => item.model.includes("ТЭМ"));
  const convertToPdf = () => {
    const wrapper = document.getElementById("wrapper");

    if (wrapper) {
      const pdfOptions = {
        margin: 10,
        filename: `plan${param.year}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      wrapper.style.fontFamily = "Times New Roman";

      html2pdf().from(wrapper).set(pdfOptions).save();
    }
  };
  let nums0 = 0;
  let nums = 0;
  let nums1 = 0;

  return (
    <Container>
      <Wrapper>
        <div id="wrapper">
          <Top>
            <p>Tastiqlayman</p>
            <p>"O'zbekiston temir yo'llari" AJ</p>
            <p>bosh menejer- bosh muhandis a.b</p>
            <p>_________________ Z.E.Maxamatov</p>
            <p>"___"_________________{param.year} yil</p>
          </Top>
          <Title>
            {param.year} yilning 1-choragi uchun "O'ztrmityolmashtamit" unitar
            kotxonasida, "O'zbekiston" , "Timchlik" lokomativ depolarida
            lokomativlarni KRP, KRP-1 mikdorda kapital ta'mirdan hamda TR-3
            mikdorda joriy ta'mirdan chiqish jadvali
          </Title>
          <Table
            border={1}
            style={{
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr>
                <th>№</th>
                <th>Локомотив русуми ва рақами</th>
                <th>Локомотив рўйхатдан ўтган депо</th>
                <th>Таъмирлаш тури</th>
                <th>Таъмирлаш жойи</th>
                <th>Таъмирдан чикиши</th>
                <th>Секциялар сони</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8}>
                  O'Z-EL, ВЛ60к, 3ВЛ80с ,2ВЛ60с rusumli elektrovozlar boyicha
                </td>
              </tr>
              {res.map(
                ({
                  id,
                  model,
                  number,
                  depo,
                  repairMode,
                  repairPlace,
                  outRepair,
                  section,
                }) => {
                  nums0++;
                  return (
                    <tr key={id}>
                      <td>{nums0}</td>
                      <td>
                        {model} {number}
                      </td>
                      <td>{depo}</td>
                      <td>{repairMode}</td>
                      <td>{repairPlace}</td>
                      <td>{outRepair}</td>
                      <td>{section}</td>
                    </tr>
                  );
                }
              )}
              <tr>
                <td colSpan={6}>Jami:</td>
                <td colSpan={2}>ta seksiya</td>
              </tr>
              <tr>
                <td colSpan={8}>
                  UzTE16M2 , ТЭ10М ,rusumli Teplovozlar boyicha
                </td>
              </tr>
              {res1.map(
                ({
                  id,
                  model,
                  number,
                  depo,
                  repairMode,
                  repairPlace,
                  outRepair,
                  section,
                }) => {
                  nums++;
                  return (
                    <tr key={id}>
                      <td>{nums}</td>
                      <td>
                        {model} {number}
                      </td>
                      <td>{depo}</td>
                      <td>{repairMode}</td>
                      <td>{repairPlace}</td>
                      <td>{outRepair}</td>
                      <td>{section}</td>
                    </tr>
                  );
                }
              )}
              <tr>
                <td colSpan={6}>Jami:</td>
                <td colSpan={2}>ta seksiya</td>
              </tr>
              <tr>
                <td colSpan={8}>ТМЭ-3, ТМЭ-2 rusumli Teplovozlar boyicha</td>
              </tr>
              {res2.map(
                ({
                  id,
                  model,
                  number,
                  depo,
                  repairMode,
                  repairPlace,
                  outRepair,
                  section,
                }) => {
                  nums1++;
                  return (
                    <tr key={id}>
                      <td>{nums1}</td>
                      <td>
                        {model} {number}
                      </td>
                      <td>{depo}</td>
                      <td>{repairMode}</td>
                      <td>{repairPlace}</td>
                      <td>{outRepair}</td>
                      <td>{section}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>
        </div>
        <button style={{ margin: "10px 0" }} onClick={convertToPdf}>
          download
        </button>
      </Wrapper>
    </Container>
  );
};

export default Doc;

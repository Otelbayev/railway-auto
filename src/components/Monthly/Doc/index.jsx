import React, { useContext } from "react";
import { Container, Wrapper, Table, Top, Title, Bottom, Name } from "./style";
import html2pdf from "html2pdf.js";
import { useParams } from "react-router-dom";
import { PlanContext } from "../../../context/PlanContext";

const Doc = () => {
  const param = useParams();
  const [data] = useContext(PlanContext);
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
            "O'ztemiryo'lmashta'mir" UK sida teplovozlarni ta'mitlashdan
            chiqarish bo'yicha {param.year}-yil {param.month.toUpperCase()}
            oyining REJASI
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
                <th>Lokomativ turi</th>
                <th>Ta'mirlash turi</th>
                <th>sek/dona</th>
                <th>{param.month}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={4}>Teplovozlar</th>
              </tr>
              <tr>
                <td rowSpan={2}>ТЭ10</td>
                <td>ТР-3</td>
                <td>7</td>
                <td>3322АБВ, 0236АБ, 1484АБ (АГМК)</td>
              </tr>
              <tr>
                <td>қисман таъмирлаш</td>
                <td>2</td>
                <td>1146АБ</td>
              </tr>
              <tr>
                <td rowSpan={2}>UzTE16M</td>
                <td>КP-1</td>
                <td>2</td>
                <td>026AB</td>
              </tr>
              <tr>
                <td>ТP-3</td>
                <td>2</td>
                <td>039AB</td>
              </tr>
              <tr>
                <td rowSpan={2}>ТЭМ2</td>
                <td>КРП</td>
                <td>1</td>
                <td>3003</td>
              </tr>
              <tr>
                <td>ТР-3</td>
                <td>3</td>
                <td>8903 (Казахстан), 8731 (Узметкомбинат), 3036 (TPЗ)</td>
              </tr>
              <tr>
                <td>Jami teplovozlar</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <th colSpan={4}>Elektrovozlar</th>
              </tr>
              <tr>
                <td>ВЛ80с</td>
                <td>КВР</td>
                <td>2</td>
                <td>2277АБ</td>
              </tr>
              <tr>
                <td>Jami elektrovozlar</td>
                <td></td>
                <td>2 куз</td>
                <td>2 куз</td>
              </tr>
            </tbody>
          </Table>
          <Bottom>
            <Name>
              Ishlab chiqarish boyicha dispetcherlik bo'limi boshlig'i:
            </Name>
            <Name>J.Y.Shomurodov</Name>
          </Bottom>
        </div>
        <button
          style={{ margin: "10px 0", padding: "2px 5px", cursor: "pointer" }}
          onClick={convertToPdf}
        >
          yuklab olish
        </button>
      </Wrapper>
    </Container>
  );
};

export default Doc;

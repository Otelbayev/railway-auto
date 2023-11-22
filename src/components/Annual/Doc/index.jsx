import React from "react";
import { Container, Wrapper } from "./style";
import html2pdf from "html2pdf.js";
import { useParams } from "react-router-dom";

const Doc = () => {
  const param = useParams();

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            autem molestias a eius magnam ipsa, nemo provident. Voluptatem quia
            ducimus perferendis, maxime ex est odit recusandae tempora
            repudiandae minus laudantium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae tenetur qui vero at quis expedita
            corrupti, non iure praesentium distinctio ullam eaque fugit quas
            beatae velit molestiae adipisci? Eum obcaecati, voluptates qui
            tempore earum dolore architecto quisquam reprehenderit debitis
            inventore! Deserunt nihil distinctio rem ducimus voluptates laborum
            voluptatibus ipsum cumque ea cupiditate necessitatibus delectus quas
            inventore tempora nam iure aspernatur earum repellendus ab
          </p>
        </div>
        <button onClick={convertToPdf}>download</button>
      </Wrapper>
    </Container>
  );
};

export default Doc;

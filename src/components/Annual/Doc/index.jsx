import React from "react";
import { Container, Wrapper } from "./style";
import html2pdf from "html2pdf.js";
const fileDownload = require("js-file-download");
const Doc = () => {
  const handleDownload = () => {
    const wrapperElement = document.getElementById("wrapper");
    if (wrapperElement) {
      const options = {
        filename: "document.pdf",
      };
      html2pdf().from(wrapperElement).set(options).save();
    }
  };
  return (
    <Container>
      <Wrapper id="wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          autem molestias a eius magnam ipsa, nemo provident. Voluptatem quia
          ducimus perferendis, maxime ex est odit recusandae tempora repudiandae
          minus laudantium.
        </p>
      </Wrapper>
      <button onClick={handleDownload}>download</button>
    </Container>
  );
};

export default Doc;

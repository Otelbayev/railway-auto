import React from "react";
import { Container, Div, Icon, Wrapper, Table } from "./style";
import { useNavigate } from "react-router-dom";
const AnnualDoc = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">Yillik Plan</div>
      <Container>
        <Table border={1}>
          <thead>
            <tr>
              <th>#</th>
              <th>Yillik plan</th>
              <th>Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Div
                  type="default"
                  onClick={() => navigate("/annual-doc/2022")}
                  active="true"
                >
                  2022 - Yillik Plan
                </Div>
              </td>
              <td a="true">
                <Div none="a" onClick={() => navigate("/doc/2022")}>
                  <Icon />
                </Div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Div
                  type="primary"
                  onClick={() => navigate("/annual-doc/2023")}
                  active="true"
                >
                  2023 - Yillik Plan
                </Div>
              </td>
              <td a="true">
                <Div none="a" onClick={() => navigate("/doc/2023")}>
                  <Icon />
                </Div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AnnualDoc;

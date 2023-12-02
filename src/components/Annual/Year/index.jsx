import React from "react";
import { Container, Div, Icon, Table } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
const Year = () => {
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
              <th>Korish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <NavLink to={"/annual-doc/2022"}>2022 - Yillik Plan</NavLink>
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
                <NavLink to={"/annual-doc/2023"}>2023 - Yillik Plan</NavLink>
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

export default Year;

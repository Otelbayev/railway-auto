import React from "react";
import { Container } from "./style";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../Annual/AnnualDoc/style";
import { Button } from "antd";
import { Table } from "./style";

const MonthlyDoc = () => {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div className="container">
      <div className="title">Oylik plan</div>
      <Container>
        <Table border={1}>
          <thead>
            <tr>
              <th>Yil</th>
              <th>Chorak</th>
              <th>Oy</th>
              <th>Korish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={12}>2023</td>
              <td rowSpan={3}>1-chorak</td>
              <td>
                <NavLink to="/monthly-doc/2023/1/Yanvar">Yanvar</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/monthly-doc/2023/1/Fevral">Fevral</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/monthly-doc/2023/1/Mart">Mart</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>2-chorak</td>
              <td>
                <NavLink to="/monthly-doc/2023/2/Aprel">Aprel</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/monthly-doc/2023/2/May">May</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/monthly-doc/2023/2/Iyun">Iyun</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>3-chorak</td>
              <td>
                <NavLink to="/monthly-doc/2023/3/Iyul">Iyul</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/monthly-doc/2023/3/Avgust">Avgust</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/monthly-doc/2023/3/Sentyabr">Sentyabr</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>4-chorak</td>
              <td>
                <NavLink to="/monthly-doc/2023/4/Oktyabr">Oktyabr</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/monthly-doc/2023/4/Noyabr">Noyabr</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/monthly-doc/2023/4/Dekabr">Dekabr</NavLink>
              </td>
              <td>
                <Button
                  onClick={() => navigate("/doc/2023/1/Yanvar")}
                  type="default"
                >
                  <Icon />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MonthlyDoc;

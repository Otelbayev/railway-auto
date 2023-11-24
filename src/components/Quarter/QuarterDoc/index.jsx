import React from "react";
import { Container } from "./style";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { Icon } from "../../Annual/AnnualDoc/style";
import { Button } from "antd";
import { Table } from "./style";

const QuarterDoc = () => {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div className="container">
      <div className="title">Chorak plan</div>
      <Container>
        <Table border={1}>
          <thead>
            <tr>
              <th>#</th>
              <th>Yil</th>
              <th>Chorak</th>
              <th>Korish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td rowSpan={4}>2022</td>
              <td>
                <NavLink to={`/quarter-plan/2022/1`}>I-Chorak plan</NavLink>
              </td>
              <td>
                <Button onClick={() => navigate("/doc/2022/1")}>
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <NavLink to={`/quarter-plan/2022/2`}>II-Chorak plan</NavLink>
              </td>
              <td>
                <Button onClick={() => navigate("/doc/2022/2")}>
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <NavLink to={`/quarter-plan/2022/3`}>III-Chorak plan</NavLink>
              </td>
              <td>
                <Button onClick={() => navigate("/doc/2022/3")}>
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <NavLink to={`/quarter-plan/2022/4`}>VI-Chorak plan</NavLink>
              </td>
              <td>
                <Button onClick={() => navigate("/doc/2022/4")}>
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td rowSpan={4}>2023</td>
              <td>
                <NavLink to={`/quarter-plan/2023/1`}>I-Chorak plan</NavLink>
              </td>
              <td>
                <Button onClick={() => navigate("/doc/2023/1")}>
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <NavLink to={`/quarter-plan/2023/2`}>II-Chorak plan</NavLink>
              </td>
              <td>
                <Button onClick={() => navigate("/doc/2023/2")}>
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <NavLink to={`/quarter-plan/2023/3`}>III-Chorak plan</NavLink>
              </td>
              <td>
                <Button onClick={() => navigate("/doc/2023/1")}>
                  <Icon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <NavLink to={`/quarter-plan/2023/4`}>VI-Chorak plan</NavLink>
              </td>
              <td>
                <Button onClick={() => navigate("/doc/2023/4")}>
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

export default QuarterDoc;

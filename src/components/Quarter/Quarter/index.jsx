import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Table, Span } from "./style";
import { months } from "../../../mock/mock";
import { Icon1, Button } from "../../Annual/AnnualPlan/style";

const Quarter = () => {
  const param = useParams();

  const navigate = useNavigate();
  let month = [];
  switch (param.quarter) {
    case "1":
      month = months.slice(0, 3);
      break;
    case "2":
      month = months.slice(3, 6);
      break;
    case "3":
      month = months.slice(6, 9);
      break;
    case "4":
      month = months.slice(9, 12);
      break;

    default:
      break;
  }
  return (
    <div className="container">
      <div className="title">
        {param.quarter} - Chorak plan - {param.year}
        <Span onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </Span>
      </div>
      <Container>
        <Table border={1}>
          <thead>
            <tr>
              <th rowSpan={2}></th>
              <th rowSpan={2}>Lokamativ seriasi</th>
              <th rowSpan={2}>Tamirlash turi</th>
              <th rowSpan={2}>
                {param.year} yil {param.quarter}-choragi uchun reja
              </th>
              {month.map(({ id, value }) => (
                <th key={id} colSpan={2}>
                  {value}
                </th>
              ))}
            </tr>
            <tr>
              <th>rejasi</th>
              <th>№</th>
              <th>rejasi</th>
              <th>№</th>
              <th>rejasi</th>
              <th>№</th>
            </tr>
            <tr>
              <th colSpan={10}>OA "O'zbekiston temir yo'llari</th>
            </tr>
            <tr>
              <td rowSpan={10}>
                <p>Lokomativdan</p> <p>foydalanish</p> <p>boshqarmasi</p>
              </td>
              <td>8ВЛ80с</td>
              <td>КВР</td>
              <td>3</td>
              <td></td>
              <td></td>
              <td>3</td>
              <td>277АБВ</td>
              <td></td>
              <td></td>
              <td>
                <Button
                  onClick={() => navigate("/quarter-plan/2022/1/1")}
                  type="gold"
                >
                  <Icon1 />
                </Button>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Jami Elektrovozlar</th>
              <th>3</th>
              <th>0</th>
              <th></th>
              <th>3</th>
              <th></th>
              <th>0</th>
              <th></th>
            </tr>
            <tr>
              <td>UzTE16M2</td>
              <td>КР-1</td>
              <td>5</td>
              <td>2</td>
              <td>026AB</td>
              <td></td>
              <td></td>
              <td>3</td>
              <td>064АБВ</td>
              <td>
                <Button
                  onClick={() => navigate("/quarter-plan/2022/1/1")}
                  type="gold"
                >
                  <Icon1 />
                </Button>
              </td>
            </tr>
            <tr>
              <td>UzTE16M2</td>
              <td>ТР-3</td>
              <td>2</td>
              <td>2</td>
              <td>029AB</td>
              <td>1</td>
              <td>1</td>
              <td></td>
              <td></td>
              <td>
                <Button
                  onClick={() => navigate("/quarter-plan/2022/1/1")}
                  type="gold"
                >
                  <Icon1 />
                </Button>
              </td>
            </tr>
            <tr>
              <td>ТЭ10M</td>
              <td>КР-1</td>
              <td>5</td>
              <td></td>
              <td></td>
              <td>3</td>
              <td>3662АБВ</td>
              <td>2</td>
              <td>1343АБ</td>
              <td>
                <Button
                  onClick={() => navigate("/quarter-plan/2022/1/1")}
                  type="gold"
                >
                  <Icon1 />
                </Button>
              </td>
            </tr>
            <tr>
              <td>ТЭ10M</td>
              <td>ТР-3</td>
              <td>9</td>
              <td>3</td>
              <td>3322АБВ</td>
              <td>4</td>
              <td>0236АБ, 3662АБ</td>
              <td>2</td>
              <td>3472АБ</td>
              <td>
                <Button
                  onClick={() => navigate("/quarter-plan/2022/1/1")}
                  type="gold"
                >
                  <Icon1 />
                </Button>
              </td>
            </tr>
            <tr>
              <td>ЧЭМ2</td>
              <td>КРП</td>
              <td>4</td>
              <td></td>
              <td></td>
              <td>2</td>
              <td>3003,1716</td>
              <td>2</td>
              <td>6572,7087</td>
              <td>
                <Button
                  onClick={() => navigate("/quarter-plan/2022/1/1")}
                  type="gold"
                >
                  <Icon1 />
                </Button>
              </td>
            </tr>
            <tr>
              <td>ЧМЭ3</td>
              <td>КРП</td>
              <td>3</td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>7409</td>
              <td>2</td>
              <td>5185,5914</td>
              <td>
                <Button
                  onClick={() => navigate("/quarter-plan/2022/1/1")}
                  type="gold"
                >
                  <Icon1 />
                </Button>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Jami Teplovozlar</th>
              <th>28</th>
              <th>7</th>
              <th></th>
              <th>13</th>
              <th></th>
              <th>11</th>
              <th></th>
            </tr>
            <tr>
              <th colSpan={2}>Jami Lokomativlar</th>
              <th>31</th>
              <th>7</th>
              <th></th>
              <th>10</th>
              <th></th>
              <th>11</th>
              <th></th>
            </tr>
          </thead>
        </Table>
      </Container>
    </div>
  );
};

export default Quarter;

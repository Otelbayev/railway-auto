import React from "react";
import { useParams } from "react-router-dom";
import { Container, Table } from "./style";
import { months } from "../../../mock/mock";

const Quarter = () => {
  const param = useParams();
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
        {param.quarter} - Четверть план - {param.year}
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
                <td rowSpan={4}>
                  <p>Lokomativdan</p> <p>foydalanish</p> <p>boshqarmasi</p>
                </td>
                <th colSpan={2}>Jami Elektrovozlar</th>

                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th colSpan={2}>Jami Teplovozlar</th>

                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th colSpan={2}>Jami Lokomativlar</th>

                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default Quarter;

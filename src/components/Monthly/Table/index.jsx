import React from "react";
import { Container, Span, Table as T } from "../../Quarter/Table/style";
import { useNavigate, useParams } from "react-router-dom";
import { Icon1, Icon3, Button } from "../../Annual/Table/style";

const Table = () => {
  const param = useParams();
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        {param.month} oyi plani
        <Span onClick={() => navigate("/monthly-doc")}>
          <i className="fa-solid fa-arrow-left"></i>
        </Span>
      </div>
      <Container>
        <T border={1}>
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
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() =>
                      navigate(
                        `/monthly-doc/${param.year}/${param.quarter}/${param.month}/1`
                      )
                    }
                    type="gold"
                  >
                    <Icon1 />
                  </Button>
                  <Button type="red">
                    <Icon3 />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>қисман таъмирлаш</td>
              <td>2</td>
              <td>1146АБ</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() =>
                      navigate(
                        `/monthly-doc/${param.year}/${param.quarter}/${param.month}/1`
                      )
                    }
                    type="gold"
                  >
                    <Icon1 />
                  </Button>
                  <Button type="red">
                    <Icon3 />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>UzTE16M</td>
              <td>КP-1</td>
              <td>2</td>
              <td>026AB</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() =>
                      navigate(
                        `/monthly-doc/${param.year}/${param.quarter}/${param.month}/1`
                      )
                    }
                    type="gold"
                  >
                    <Icon1 />
                  </Button>
                  <Button type="red">
                    <Icon3 />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>ТP-3</td>
              <td>2</td>
              <td>039AB</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() =>
                      navigate(
                        `/monthly-doc/${param.year}/${param.quarter}/${param.month}/1`
                      )
                    }
                    type="gold"
                  >
                    <Icon1 />
                  </Button>
                  <Button type="red">
                    <Icon3 />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>ТЭМ2</td>
              <td>КРП</td>
              <td>1</td>
              <td>3003</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() =>
                      navigate(
                        `/monthly-doc/${param.year}/${param.quarter}/${param.month}/1`
                      )
                    }
                    type="gold"
                  >
                    <Icon1 />
                  </Button>
                  <Button type="red">
                    <Icon3 />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>ТР-3</td>
              <td>3</td>
              <td>8903 (Казахстан), 8731 (Узметкомбинат), 3036 (TPЗ)</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() =>
                      navigate(
                        `/monthly-doc/${param.year}/${param.quarter}/${param.month}/1`
                      )
                    }
                    type="gold"
                  >
                    <Icon1 />
                  </Button>
                  <Button type="red">
                    <Icon3 />
                  </Button>
                </div>
              </td>
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
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() =>
                      navigate(
                        `/monthly-doc/${param.year}/${param.quarter}/${param.month}/1`
                      )
                    }
                    type="gold"
                  >
                    <Icon1 />
                  </Button>
                  <Button type="red">
                    <Icon3 />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Jami elektrovozlar</td>
              <td></td>
              <td>2 куз</td>
              <td>2 куз</td>
            </tr>
          </tbody>
        </T>
      </Container>
    </div>
  );
};

export default Table;

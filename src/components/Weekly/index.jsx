import React, { useState } from "react";
import styled from "styled-components";
import {
  elektrovozModel,
  teplovozModel,
  drezinaModel,
  repair,
  models,
} from "../../mock/mock";
import { Btn, Button, Icon1, Icon2, Icon3 } from "../Annual/Table1/style";
import { Input, Select } from "antd";

const Week = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  .top {
    text-align: center;
  }
  .menu {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  .content {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Table = () => {
  const [edit, setEdit] = useState(null);
  let count = 0;
  return (
    <div className="container">
      <div className="title">Haftalik jadval</div>
      <div className="wrapper">
        <div style={{ fontSize: "16px", padding: "10px 0" }}>
          Malumot qoshish
        </div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Lokomativ seriasi</th>
              <th className="th">Lokomativ raqami</th>
              <th className="th">Ta;mir turi</th>
              <th className="th">Izoh</th>
              <th className="th">Qo'sish</th>
            </tr>
            <tr className="tr">
              <th className="th">#</th>
              <th className="th">
                <Select options={models} style={{ width: "105px" }} />
              </th>
              <th className="th">
                <Input style={{ width: "105px" }} />
              </th>
              <th className="th">
                <Select options={repair} style={{ width: "70px" }} />
              </th>
              <th className="th">
                <Input style={{ width: "100%" }} />
              </th>
              <th className="th">
                <Btn type="blue">Qo'shish</Btn>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="wrapper">
        <Week>
          <div className="top">
            10.10.2023 yildan 10.10.2023 yilgacha bo'lgan vazifa.
          </div>
          <div className="menu">
            <div className="menu-item">jo'natish:</div>
            <div className="menu-item">reostatga:</div>
            <div className="menu-item">reostat:</div>
            <div className="menu-item">EMS:</div>
            <div className="menu-item">dizellar:</div>
            <div className="menu-item">telejkalar:</div>
            <div className="menu-item">g'ildiraklar:</div>
          </div>
          <div className="top">10.10.2023 yilgi vazifa.</div>
          <div className="top">elektrovoxlar</div>
          {elektrovozModel.map((item, index) => {
            count++;
            return (
              <div className="content" key={index}>
                <div className="body">
                  {edit === index ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {count}.{" "}
                      <Select options={models} style={{ width: "200px" }} />
                      <Input style={{ width: "100px" }} />
                      <Select options={repair} style={{ width: "100px" }} />
                      <Input style={{ width: "100%" }} />
                    </div>
                  ) : (
                    <>
                      {count}. {item} {"number"} (
                      {repair[index]?.label || "TT-1"}) - topshirilsin
                      jo'natilsin
                    </>
                  )}
                </div>
                <div className="action">
                  {edit === index ? (
                    <>
                      <Button type="green" onClick={() => setEdit(null)}>
                        <Icon2 style={{ padding: "2px" }} />
                      </Button>
                      <Button type="red" onClick={() => setEdit(null)}>
                        <Icon3 style={{ padding: "2px" }} />
                      </Button>
                    </>
                  ) : (
                    <Button type="gold" onClick={() => setEdit(index)}>
                      <Icon1 style={{ padding: "2px" }} />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
          <div className="top">teplovozlar</div>
          {teplovozModel.map((item, index) => {
            count++;
            return (
              <div className="content" key={index}>
                <div className="body">
                  {edit === index ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {count}.{" "}
                      <Select options={models} style={{ width: "200px" }} />
                      <Input style={{ width: "100px" }} />
                      <Select options={repair} style={{ width: "100px" }} />
                      <Input style={{ width: "100%" }} />
                    </div>
                  ) : (
                    <>
                      {count}. {item} {"number"} (
                      {repair[index]?.label || "TT-1"}) - topshirilsin
                      jo'natilsin
                    </>
                  )}
                </div>
                <div className="action">
                  {edit === index ? (
                    <>
                      <Button type="green" onClick={() => setEdit(null)}>
                        <Icon2 style={{ padding: "2px" }} />
                      </Button>
                      <Button type="red" onClick={() => setEdit(null)}>
                        <Icon3 style={{ padding: "2px" }} />
                      </Button>
                    </>
                  ) : (
                    <Button type="gold" onClick={() => setEdit(index)}>
                      <Icon1 style={{ padding: "2px" }} />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
          <div className="top">drezinalar</div>
          {drezinaModel.map((item, index) => {
            return (
              <div className="content" key={index}>
                <div className="body">
                  {edit === index ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {count}.{" "}
                      <Select options={models} style={{ width: "200px" }} />
                      <Input style={{ width: "100px" }} />
                      <Select options={repair} style={{ width: "100px" }} />
                      <Input style={{ width: "100%" }} />
                    </div>
                  ) : (
                    <>
                      {count}. {item} {"number"} (
                      {repair[index]?.label || "TT-1"}) - topshirilsin
                      jo'natilsin
                    </>
                  )}
                </div>
                <div className="action">
                  {edit === index ? (
                    <>
                      <Button type="green" onClick={() => setEdit(null)}>
                        <Icon2 style={{ padding: "2px" }} />
                      </Button>
                      <Button type="red" onClick={() => setEdit(null)}>
                        <Icon3 style={{ padding: "2px" }} />
                      </Button>
                    </>
                  ) : (
                    <Button type="gold" onClick={() => setEdit(index)}>
                      <Icon1 style={{ padding: "2px" }} />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </Week>
      </div>
    </div>
  );
};

export default Table;

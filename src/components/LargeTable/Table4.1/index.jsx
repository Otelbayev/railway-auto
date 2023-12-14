import React from "react";
import { Btn } from "../../Annual/Table1/style";
import { getMonth } from "../../../mock/mock";
import Cookies from "js-cookie";

const Table = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="doctitle">2023 yil {getMonth(1)} oyidagi</div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th" rowSpan={2}>
                Uchastka
              </th>
              <th className="th" rowSpan={2}>
                Pozitsiya
              </th>
              <th className="th" rowSpan={2}>
                O'ylik reja
              </th>
              <th className="th" colSpan={24}>
                Oylik ish kunlari
              </th>
              <th className="th" colSpan={3}>
                O'n kunlik
              </th>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <th className="th">I</th>
              <th className="th">II</th>
              <th className="th">III</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <th className="th" rowSpan={18}>
                LYS
              </th>
              <th className="th" rowSpan={2}>
                Qismlarga ajratishga qoyish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Qismlarga ajratish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Yuvilgan ramani uzatish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                O'z telejkasiga tushirish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Reostatga o'tish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Reostatni topshirish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Temit yolda sinash
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Topshirish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Jonatish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={6}>
                EMS
              </th>
              <th className="th" rowSpan={2}>
                2-x mash.agregat
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Bosh generator
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Tortuv elektr dvigateli
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={4}>
                G'ildirak uchastkasi
              </th>
              <th className="th" rowSpan={2}>
                Teplovoz/elektrovoz g'ildirak juftligi
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Vogon g'ildirak juftligi
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={8}>
                TBS
              </th>
              <th className="th" rowSpan={2}>
                Telejkalar
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Reduktorlar
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Vagon telejkasi
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Block ta'mirlash
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={6}>
                DTS
              </th>
              <th className="th" rowSpan={2}>
                Dizel yig'ish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Dizelni sinovdan otkazish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}></th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                Vagon uchastkasi
              </th>
              <th className="th" rowSpan={2}>
                Duradgorlik ishlari
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={4}>
                EAS
              </th>
              <th className="th" rowSpan={2}>
                EL sxemasini yig'ish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>

            <tr className="tr">
              <th className="th" rowSpan={2}>
                EL.apparatini o'rnatish
              </th>
              <th className="th" rowSpan={2}></th>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
            <tr className="tr">
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
            </tr>
          </tbody>
        </table>
        <div className="bottom">
          <div className="bottomName">
            Ishlab chiqarish dispetcherlik bolim boshlig'i:
          </div>
          <div className="bottomName">Shomurodov J.Y</div>
        </div>
        <div className="footer">
          <Btn type="green">hujjatni saqlash</Btn>
        </div>
      </div>
    </div>
  );
};

export default Table;

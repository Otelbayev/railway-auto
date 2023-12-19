import React from "react";
import { months } from "../../../mock/mock";
import { Btn, Button, Icon1 } from "../../Annual/Table1/style";
import { Input } from "antd";

const Table = () => {
  const style = {
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
    fontSize: "15px",
    padding: "5px",
  };

  const date = new Date();

  return (
    <div className="container">
      <div className="wrapper">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th" rowSpan={2}>
                №
              </th>
              <th className="th" rowSpan={2} style={style}>
                Lokomativ seriasi
              </th>
              <th
                className="th"
                style={{ fontSize: "15px", padding: "5px" }}
                rowSpan={2}
              >
                Tep/elek raqamlari deponing nomi
              </th>
              <th className="th" rowSpan={2} style={style}>
                Tamirlash turi
              </th>
              <th className="th" rowSpan={2} style={style}>
                Seksiya
              </th>
              <th className="th" rowSpan={2} style={style}>
                Qismlarga ajratish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Dizelni uzatish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Ramani ko'tarish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Ramani tsexga qabul qilish
              </th>
              <th
                className="th"
                style={{ fontSize: "15px", padding: "5px" }}
                colSpan={3}
              >
                EMS
              </th>
              <th
                className="th"
                style={{ fontSize: "15px", padding: "5px" }}
                colSpan={2}
              >
                G'ildirak tsexi
              </th>
              <th
                className="th"
                style={{ fontSize: "15px", padding: "5px" }}
                colSpan={2}
              >
                TBS
              </th>
              <th
                className="th"
                style={{ fontSize: "15px", padding: "5px" }}
                colSpan={2}
              >
                DTS
              </th>
              <th className="th" rowSpan={2} style={style}>
                Teplovozni telejkasiga tushirish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Dizelni o'rnatish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Duradgorlik ishlari
              </th>
              <th
                className="th"
                style={{ fontSize: "15px", padding: "5px" }}
                colSpan={2}
              >
                EAS
              </th>
              <th className="th" rowSpan={2} style={style}>
                Reostatga o'tish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Reostatni topshirish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Yurish qismini topshirish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Teplovozning sinovi
              </th>
              <th className="th" rowSpan={2} style={style}>
                Raskolodka
              </th>
              <th className="th" rowSpan={2} style={style}>
                Topshirish
              </th>
              <th className="th" rowSpan={2} style={style}>
                Jo'natish
              </th>
              <th className="th" rowSpan={2} style={style}>
                tahrirlash
              </th>
            </tr>
            <tr className="tr">
              <th className="th" style={style}>
                2-x mash. Agregat
              </th>
              <th className="th" style={style}>
                Bosh generator
              </th>
              <th className="th" style={style}>
                Tortuv elektr dvigateli
              </th>
              <th className="th" style={style}>
                Teplovoz g'ildirak juftligi
              </th>
              <th className="th" style={style}>
                Vagon g'ildirak juftligi
              </th>
              <th className="th" style={style}>
                Telejkalar
              </th>
              <th className="th" style={style}>
                Uzellar
              </th>
              <th className="th" style={style}>
                Dizelni yig'ish
              </th>
              <th className="th" style={style}>
                Dizel sinovi
              </th>
              <th className="th" style={style}>
                EL.sxema yig'ish
              </th>
              <th className="th" style={style}>
                EL.apparatni o'rnatish
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <td className="td">1</td>
              <td className="td">UzTE16M</td>
              <td className="td">Uzbekiston</td>
              <td className="td">TQT</td>
              <td className="td">5</td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td"></td>
              <td className="td">
                <Button type="gold">
                  <Icon1 />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="footer">
          <Btn type="green">hujjatni saqlash</Btn>
        </div>
      </div>
    </div>
  );
};

export default Table;

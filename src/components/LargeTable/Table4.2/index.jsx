import React from "react";

const Table = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container">
      <div className="wrapper">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Teplovoz raqami</th>
              <th className="th">Teplovoz seriasi</th>
              <th className="th">Seksiyasi</th>
              <th className="th">Ta'mirlash turi</th>
              <th className="th">Deponing nomi</th>
              <th className="th">Topshirish</th>
              <th className="th">Jo'natish</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e) => (
              <tr className="tr" key={e}>
                <td className="td">{e}</td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

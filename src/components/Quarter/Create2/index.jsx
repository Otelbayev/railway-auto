import Cookies from "js-cookie";
import React from "react";

const Create2 = () => {
  return (
    <div className="container">
      <div className="title">
        {Cookies.get("quarter") || 1} - chorak Table 2.1 ga malumot qo'shish
      </div>
      <div className="wrapper">
        <h1>Jasurbek</h1>
      </div>
    </div>
  );
};

export default Create2;

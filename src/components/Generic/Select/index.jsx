import React from "react";
import { Select, Space } from "antd";

const Selects = ({ width, height, options }) => {
  return (
    <Space wrap>
      <Select
        defaultValue={options[0].value}
        style={{
          width: width ? width : 120,
          height: height ? height : 33,
        }}
        options={options}
      />
    </Space>
  );
};

export default Selects;

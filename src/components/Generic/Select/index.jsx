import React, { forwardRef } from "react";
import { Select, Space } from "antd";

const Selects = forwardRef(({ defaultValue, width, onChange, options }, ref) => {
  return (
    <Space wrap>
      <Select
        defaultValue={defaultValue || options[0]?.label}
        style={{
          width: { width },
        }}
        onChange={onChange}
        options={options}
        ref={ref}
      />
    </Space>
  );
});

export default Selects;

import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Option } = Select;

function CustomSelect({ items }) {
  return (
    <StyledSelect
      defaultValue="elma"
      suffixIcon={() => <CaretDownOutlined style={{ color: "#4A4C53" }} />}
    >
      {items.map((item) => (
        <Option value={item.value}>{item.label}</Option>
      ))}
    </StyledSelect>
  );
}
const StyledSelect = styled(Select)`
  width: 100%;
  padding: 0px 5px;
  .ant-select-selector {
    border-radius: 6px !important;
    border-color: #afb0b9 !important;
    height: auto !important;
    padding: 10px 20px !important;
    .ant-select-selection-item {
      font-family: "Inter", sans-serif;
      font-size: 15px !important;
    }
  }
  .ant-select-arrow {
    right: 20px !important;
  }
`;
CustomSelect.defaultProps = {
  items: [{ value: "elma", label: "Elma" }],
};
CustomSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
export default CustomSelect;

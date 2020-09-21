import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import theme from "../consts/style";

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

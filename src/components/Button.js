import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Button({ title, onClick, size, filled }) {
  return (
    <StyledButton type="button" size={size} onClick={onClick} filled={filled}>
      {title}
    </StyledButton>
  );
}

Button.defaultProps = {
  onClick: () => {},
  size: "sm",
  filled: false,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  filled: PropTypes.bool,
};

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.filled ? props.theme.colors.orange : "transparent"};
  padding: 8px 40px;
  border: ${(props) =>
    !props.filled ? `1px solid ${props.theme.colors.orange}` : "none"};
  color: ${(props) => (props.filled ? "white" : props.theme.colors.orange)};

  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
  font-family: "Mulish", sans-serif;
  font-weight: bold;
`;
export default Button;

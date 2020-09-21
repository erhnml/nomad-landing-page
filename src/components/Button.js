import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Button({ title, onClick, size, filled, ...props }) {
  return (
    <StyledButton
      type="button"
      size={size}
      onClick={onClick}
      filled={filled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
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
  height: 40px;
  border: ${(props) =>
    !props.filled ? `1px solid ${props.theme.colors.orange}` : "none"};
  color: ${(props) => (props.filled ? "white" : props.theme.colors.orange)};
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: ${(props) => (props.filled ? "#E68117" : "white")};
  }
`;
export default Button;

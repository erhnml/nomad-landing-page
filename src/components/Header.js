import React from "react";
import styled from "styled-components";
import Button from "./Button";
import logo from "../images/logo.svg";

function Header() {
  return (
    <Wrapper>
      <Logo>
        <LogoImage src={logo} />
      </Logo>
      <Menu>
        <MenuItem active>Home</MenuItem>
        <MenuItem>Destinations</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Partner</MenuItem>
        <LoginButton title="Login" />
        <Button title="Register" filled />
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
`;
const Logo = styled.div``;
const LogoImage = styled.img``;
const Menu = styled.div``;
const MenuItem = styled.a`
  color: ${(props) => (props.active ? "#202336" : "#B8BECD")};
  margin-right: 35px;
  font-size: 16px;
  :hover {
    color: #202336;
  }
  font-family: "Inter", sans-serif;
`;
const LoginButton = styled(Button)`
  margin-right: 10px;
`;
export default Header;

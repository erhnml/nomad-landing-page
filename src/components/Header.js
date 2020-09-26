import React, { useState } from "react";
import styled from "styled-components";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import Button from "./Button";
import logo from "../images/logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Wrapper>
      <Logo>
        <LogoImage src={logo} />
        {!menuOpen && <MenuIcon onClick={() => setMenuOpen(true)} />}
        {menuOpen && <CloseIcon onClick={() => setMenuOpen(false)} />}
      </Logo>
      <Menu open={menuOpen}>
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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    height: auto;
    position: relative;
  }
`;
const Logo = styled.div`
  @media (max-width: 768px) {
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.orange};
    border-bottom: 2px solid #b8becd;
  }
`;
const LogoImage = styled.img``;
const Menu = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: calc(100vh - 60px);
    padding: 20px;
    position: absolute;
    top: 60px;
    right: 0px;
    left: 0px;
    z-index: 9;
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: all 0.3s ease;
  }
`;
const MenuItem = styled.a`
  color: ${(props) => (props.active ? "#202336" : "#B8BECD")};
  margin-right: 35px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  :hover {
    color: #202336;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;
const LoginButton = styled(Button)`
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 15px;
    margin-top: 20px;
  }
`;
const MenuIcon = styled(MenuOutlined)`
  font-size: 28px;
  color: white;
  cursor: pointer;
`;
const CloseIcon = styled(CloseOutlined)`
  font-size: 28px;
  color: white;
  cursor: pointer;
`;
export default Header;

import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import Container from "./Container";

export default function Footer() {
  return (
    <ContainerWrapper>
      <Container>
        <Wrapper>
          <Section>
            <LogoWrapper>
              <Logo src={logo} />
            </LogoWrapper>
            <Text>
              Plan and book your perfect trip with expert advice, travel tips
              destination information from us
            </Text>
            <Copyright>©2020 Thousand Sunny. All rights reserved</Copyright>
          </Section>
          <Section>
            <Title>Destinations</Title>
            <Link href="/">Africa</Link>
            <Link href="/">Antartica</Link>
            <Link href="/">Asia</Link>
            <Link href="/">Europe</Link>
            <Link href="/">America</Link>
          </Section>
          <Section>
            <Title>Shop</Title>
            <Link href="/">Destination Guides</Link>
            <Link href="/">Pictoral & Gifts</Link>
            <Link href="/">Special Offers</Link>
            <Link href="/">Delivery Times</Link>
            <Link href="/">FAQs</Link>
          </Section>
          <Section>
            <Title>Interests</Title>
            <Link href="/">Adventura Travel</Link>
            <Link href="/">Art and Culture</Link>
            <Link href="/">Wildlife and Natura</Link>
            <Link href="/">Family Holidays</Link>
            <Link href="/">Food and Drink</Link>
          </Section>
        </Wrapper>
      </Container>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  background-color: #f9f9fb;
  padding: 50px 0px;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 30px 0px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-column-gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0px 10px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const LogoWrapper = styled.div`
  margin-bottom: 20px;
`;
const Logo = styled.img``;
const Text = styled.p`
  color: #848484;
  font-size: 18px;
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  line-height: 28px;
`;
const Link = styled.a`
  color: #848484;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 300;
  font-family: "Mulish", sans-serif;
`;
const Title = styled.h4`
  font-size: 19px;
  font-weight: bold;
  font-family: "Mulish", sans-serif;
`;
const Copyright = styled(Text)`
  font-size: 17px;
  margin-top: 10px;
`;

import React from "react";
import styled from "styled-components";
import Button from "./Button";
import InformationImage from "../images/section-2.png";

function SectionInfo() {
  return (
    <Wrapper>
      <InfoImage>
        <Image src={InformationImage} />
      </InfoImage>
      <InfoWrapper>
        <InfoTitle>A new way to explore the</InfoTitle>
        <InfoTitle>world</InfoTitle>
        <Information>
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </Information>
        <InfoButton title="Learn More" filled />
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    font-size: 48px;
    line-height: 45px;
  }
`;
const InfoImage = styled.div`
  @media (max-width: 768px) {
    padding: 20px;
    order: 2;
  }
`;
const InfoWrapper = styled.div`
  padding: 50px;
  @media (max-width: 768px) {
    order: 1;
    padding: 20px;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;
const InfoTitle = styled.h2`
  font-size: 36px;
  line-height: 32px;
  font-family: "Playfair Display", sans-serif;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    line-height: 32px;
    margin: 0;
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 28px;
  }
`;
const Information = styled.p`
  font-size: 17px;
  line-height: 30px;
  font-family: "Mulish", sans-serif;
  font-weight: light;
  color: #7d7987;
  margin-top: 20px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const InfoButton = styled(Button)`
  margin-top: 20px;
  @media (max-width: 768px) {
    display: block;
    margin: 20px auto 0px auto;
  }
`;

export default SectionInfo;

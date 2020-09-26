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
        <Info>
          <InfoTitle>A new way to explore the</InfoTitle>
          <InfoTitle>world</InfoTitle>
          <Information>
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </Information>
          <InfoButton title="Learn More" filled />
        </Info>
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
`;
const InfoImage = styled.div`
  padding: 20px;
`;
const InfoWrapper = styled.div`
  display: grid;
  row-gap: 20px;
  padding: 50px;
`;

const Image = styled.img`
  max-width: 100%;
`;
const Info = styled.div``;
const InfoTitle = styled.h2`
  font-size: 35px;
  line-height: 30px;
  font-family: "Playfair Display", sans-serif;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Information = styled.p`
  font-size: 17px;
  line-height: 30px;
  font-family: "Mulish", sans-serif;
  font-weight: light;
  color: #7d7987;
  margin-top: 20px;
`;
const InfoButton = styled(Button)`
  margin-top: 30px;
`;

export default SectionInfo;

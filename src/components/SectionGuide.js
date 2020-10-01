/* eslint-disable global-require */
import React from "react";
import styled from "styled-components";
import Button from "./Button";

function GuideSection() {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Guides by Thousand</Title>
        <Title>Sunny</Title>
        <Text>
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </Text>
        <DownloandBtn title="Download" filled />
      </TextWrapper>
      <ImageWrapper>
        <Image src={require("../images/setion-3.png")} />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  @media (max-width: 768px) {
    grid-row-gap: 20px;
    grid-template-columns: 1fr;
    padding: 0px 10px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const ImageWrapper = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.h3`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0px;
  font-family: "Playfair Display" sans-serif;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
const Text = styled.p`
  font-size: 17px;
  font-family: "Mulish" sans-serif;
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 300;
  @media (max-width: 768px) {
    margin-top: 10px;
    text-align: center;
  }
`;

const DownloandBtn = styled(Button)`
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
export default GuideSection;

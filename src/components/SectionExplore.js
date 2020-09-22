import React from "react";
import styled from "styled-components";
import Select from "./Select";
import Button from "./Button";
import ExploreImage from "../images/header.png";

function SectionExplore() {
  return (
    <Wrapper>
      <Finder>
        <FinderTitle>Explore And</FinderTitle>
        <FinderTitle>Travel</FinderTitle>
        <FinderSubtitle>Holiday Finder</FinderSubtitle>
        <Divide />
        <SearchWrapper>
          <Select />
          <Select />
          <Select />
          <Select />
          <ExploreButton title="Explore" filled />
        </SearchWrapper>
      </Finder>
      <FinderImage>
        <Image src={ExploreImage} />
      </FinderImage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
`;
const Finder = styled.div``;
const FinderTitle = styled.h1`
  font-size: 64px;
  line-height: 80px;
  font-family: "Playfair Display", sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;
const FinderSubtitle = styled.h3`
  font-size: 22px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  margin-top: 70px;
`;
const Divide = styled.div`
  width: 32px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const FinderImage = styled.div``;
const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  margin-top: 30px;
`;
const Image = styled.img`
  max-width: 100%;
`;
const ExploreButton = styled(Button)`
  width: 50%;
  margin-top: 30px;
`;
export default SectionExplore;

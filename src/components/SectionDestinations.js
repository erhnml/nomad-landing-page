import React from "react";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import DestinationCard from "./DestinationCard";
import destination1 from "../images/destination-1.png";
import destination2 from "../images/destination-2.png";
import destination3 from "../images/destination-3.png";
import destination4 from "../images/destination-4.png";

const data = [
  {
    id: 1,
    title: "Raja Ambad",
    subTitle: "Indonesia",
    image: destination1,
  },
  {
    id: 2,
    title: "Raja Ambad",
    subTitle: "Indonesia",
    image: destination2,
  },
  {
    id: 3,
    title: "Raja Ambad",
    subTitle: "Indonesia",
    image: destination3,
  },
  {
    id: 4,
    title: "Raja Ambad",
    subTitle: "Indonesia",
    image: destination4,
  },
];
function SectionDestinations() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function prev() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }
  function next() {
    if (activeIndex < data.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }
  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>Featured destinations</HeaderTitle>
        <HeaderLink>{`View all >`}</HeaderLink>
      </HeaderWrapper>
      <ItemsWrapper>
        {data.map((item, index) => (
          <DestinationCard
            key={item.id}
            activeIndex={activeIndex}
            item={item}
            index={index}
          />
        ))}
        <PrevButton onClick={prev} />
        <NextButton onClick={next} />
      </ItemsWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  margin-top: 100px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 0px 20px;
  }
`;
const HeaderTitle = styled.h3`
  font-size: 36px;
  font-family: "Playfair", sans-serif;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;
const HeaderLink = styled.a`
  font-size: 16px;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  margin-bottom: 100px;
  min-height: 400px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 100%);
    overflow: auto;
    grid-column-gap: 0;
    position: relative;
    overflow: hidden;
  }
`;
const NextButton = styled(RightOutlined)`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  color: white;
  padding: 10px;
  border-radius: 3px;
  font-weight: bold;
  top: 50%;
  right: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const PrevButton = styled(LeftOutlined)`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  color: white;
  padding: 10px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  top: 50%;
  left: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export default SectionDestinations;

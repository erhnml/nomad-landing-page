import React from "react";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import StoryCard from "./StoryCard";
import story1 from "../images/story-1.png";
import story2 from "../images/story-2.png";
import story3 from "../images/story-3.png";
import story4 from "../images/story-4.png";

const data = [
  {
    id: 1,
    title: "The many benefits of taking a healing holiday",
    subTitle:
      "'Healing holidays' are on the rise to help maximise your health and happines...",
    image: story1,
  },
  {
    id: 2,
    title: "The best Kyoto restaurant to try Japanese food",
    subTitle:
      "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...",
    image: story2,
  },
  {
    id: 3,
    title: "Skip Chichen Itza and head to this remote Yucatan",
    subTitle:
      "It’s remote and challenging to get, but braving the jungle and exploring these...",
    image: story3,
  },
  {
    id: 4,
    title: "Surf’s up at these beginner spots around the world",
    subTitle:
      "If learning to surf has in on your to-do list for a while, the good news is...",
    image: story4,
  },
];
function SectionStories() {
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
        <HeaderTitle>Trending stories</HeaderTitle>
        <HeaderLink>{`View all >`}</HeaderLink>
      </HeaderWrapper>
      <ItemsWrapper>
        {data.map((item, index) => (
          <StoryCard
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
  min-height: 330px;
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
export default SectionStories;

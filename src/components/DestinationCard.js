import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function DestinationCard({ item, activeIndex, index }) {
  const { title, subTitle, image } = item;
  return (
    <Wrapper activeIndex={activeIndex} index={index}>
      <ImageWrapper image={image}>
        <TextWrapper>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </TextWrapper>
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 0 10px;
  @media (max-width: 768px) {
    transform: ${({ index, activeIndex }) =>
      `translateX(${index * 100 - activeIndex * 100}%)`};
    transition: 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const ImageWrapper = styled.div`
  height: 100%;
  border-radius: 5px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  background-color: white;
  padding: 10px 20px 0px 0px;
  border-top-right-radius: 5px;
`;
const Title = styled.h3`
  margin-bottom: 0px;
  font-size: 16px;
  font-family: "Inter" sans-serif;
  font-weight: bold;
`;
const SubTitle = styled.p`
  margin-bottom: 0px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

DestinationCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.string.isRequired,
  activeIndex: PropTypes.string.isRequired,
};

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function DestinationCard({ item }) {
  const { title, subTitle, image } = item;
  return (
    <Wrapper image={image}>
      <TextWrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  border-radius: 5px;
  position: relative;
`;
const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
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
};

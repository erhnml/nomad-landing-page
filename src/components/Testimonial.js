import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StarFilled } from "@ant-design/icons";

function Testimonial({ star, comment, author, authorPosition, image }) {
  function getStars() {
    const stars = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < star; i++) {
      stars.push(<Star />);
    }
    return stars;
  }
  return (
    <Wrapper>
      <TextWrapper>
        <Stars>{getStars()}</Stars>
        <Comment>{`"${comment}"`}</Comment>
        <Author>{author}</Author>
        <AuthorPosition>{authorPosition}</AuthorPosition>
      </TextWrapper>
      <ImagesWrapper>
        <Image src={image} />
      </ImagesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Stars = styled.div`
  margin-bottom: 10px;
`;
const Comment = styled.p`
  font-size: 24px;
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  width: 70%;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
    padding-right: 20px;
  }
`;
const Author = styled.h5`
  font-size: 22px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const AuthorPosition = styled.h6`
  font-size: 18px;
  font-family: "Inter", sans-serif;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ImagesWrapper = styled.div``;
const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const Star = styled(StarFilled)`
  color: #ffbb0c;
  font-size: 24px;
  margin-right: 10px;
`;

Testimonial.propTypes = {
  star: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorPosition: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Testimonial;

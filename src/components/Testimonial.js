import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Testimonial({ star, comment, author, authorPosition, image }) {
  return (
    <Wrapper>
      <TextWrapper>
        <Stars />
        <Comment>{comment}</Comment>
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
  position: absolute;
`;
const TextWrapper = styled.div``;
const Stars = styled.div``;
const Comment = styled.p``;
const Author = styled.h5``;
const AuthorPosition = styled.h6``;
const ImagesWrapper = styled.div``;
const Image = styled.img`
  width: 100%;
`;

Testimonial.propTypes = {
  star: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorPosition: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Testimonial;

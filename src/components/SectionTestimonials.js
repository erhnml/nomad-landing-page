import React from "react";
import styled from "styled-components";

import Testimonial from "./Testimonial";

const data = [
  {
    star: 5,
    comment:
      "Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec",
    author: "Edward Newgate",
    authorPosition: "Founder Circle",
  },
  {
    star: 5,
    comment:
      "Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec",
    author: "Edward Newgate",
    authorPosition: "Founder Circle",
  },
  {
    star: 5,
    comment:
      "Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec",
    author: "Edward Newgate",
    authorPosition: "Founder Circle",
  },
  {
    star: 5,
    comment:
      "Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec",
    author: "Edward Newgate",
    authorPosition: "Founder Circle",
  },
];
export default function SectionTestimonials() {
  return (
    <Wrapper>
      <Title>Test</Title>
      <TestimonialsWrapper>
        {data.map(({ star, comment, author, authorPosition }) => (
          <Testimonial
            star={star}
            comment={comment}
            author={author}
            authorPosition={authorPosition}
            image={require("../images/testimonial.png")}
          />
        ))}
      </TestimonialsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
`;
const Title = styled.h3``;
const TestimonialsWrapper = styled.div`
  position: relative;
`;

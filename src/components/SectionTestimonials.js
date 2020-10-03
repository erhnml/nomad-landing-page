import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";

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
      <Title>Testimonials</Title>
      <Carousel autoplay>
        {data.map(({ star, comment, author, authorPosition }) => (
          <Testimonial
            star={star}
            comment={comment}
            author={author}
            authorPosition={authorPosition}
            // eslint-disable-next-line global-require
            image={require("../images/testimonial.png")}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  @media (max-width: 768px) {
    padding: 0 10px;
    margin-top: 50px;
  }
`;
const Title = styled.h3`
  font-size: 36px;
  font-family: "Playfair Display", sans-serif;
  line-height: 50px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

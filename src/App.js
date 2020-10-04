import React from "react";

import Theme from "./components/Theme";
import Header from "./components/Header";
import SectionExplore from "./components/SectionExplore";
import SectionInfo from "./components/SectionInfo";
import SectionDestinations from "./components/SectionDestinations";
import SectionGuide from "./components/SectionGuide";
import SectionTestimonials from "./components/SectionTestimonials";
import SectionStories from "./components/SectionStories";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
    <Theme>
      <Container>
        <Header />
        <SectionExplore />
        <SectionInfo />
        <SectionDestinations />
        <SectionGuide />
        <SectionTestimonials />
        <SectionStories />
      </Container>
      <Footer />
    </Theme>
  );
}

export default App;

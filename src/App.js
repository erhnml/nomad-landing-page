import React from "react";
import styled from "styled-components";

import Theme from "./components/Theme";
import Header from "./components/Header";
import SectionExplore from "./components/SectionExplore";
import SectionInfo from "./components/SectionInfo";
import SectionDestinations from "./components/SectionDestinations";

function App() {
  return (
    <Theme>
      <Container>
        <Header />
        <SectionExplore />
        <SectionInfo />
        <SectionDestinations />
      </Container>
    </Theme>
  );
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;

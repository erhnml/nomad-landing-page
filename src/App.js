import React from "react";
import Theme from "./components/Theme";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <Theme>
      <Container>
        <Header />
      </Container>
    </Theme>
  );
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;

import React from "react";
import Header from "../../components/Header";
import HighlightCard from "../../components/HighlightCard";

import { Container, HeaderWrapper } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <HighlightCard />
    </Container>
  );
};

export default Dashboard;

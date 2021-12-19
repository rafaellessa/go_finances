import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  FooterWrapper,
  Amount,
  LastTransaction,
} from "./styles";

const HighlightCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <FooterWrapper>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </FooterWrapper>
    </Container>
  );
};

export default HighlightCard;

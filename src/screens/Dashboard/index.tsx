import React from "react";
import Header from "../../components/Header";
import HighlightCard from "../../components/HighlightCard";

import TransactionCard, {
  TransactionProps,
} from "../../components/TransactionCard";

import {
  Container,
  HighLightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

const Dashboard: React.FC = () => {
  const data: TransactionProps[] = [
    {
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/09/2021",
    },
    {
      type: "negative",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/09/2021",
    },
    {
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/09/2021",
    },
  ];

  return (
    <Container>
      <Header onPress={() => {}} />
      <HighLightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 7.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
      </HighLightCards>

      <Transactions>
        <Title>Movimentações</Title>
        <TransactionsList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          keyExtractor={(item, index) => String(item.amount + index)}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;

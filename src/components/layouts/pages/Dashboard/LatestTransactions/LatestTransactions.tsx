import React from "react";
import styled from "styled-components/macro";
import Title from "components/library/Title/Title";
import Card from "components/library/Card/Card";
import HorizontalDivider from "components/library/HorizontalDivider/HorizontalDivider";
import Avatar from "components/library/Avatar/Avatar";
import SubTitle from "components/library/SubTitle/SubTitle";
import { useTransactionsAPI } from "contexts/TransactionsAPI";

const TransactionsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 510px;
  min-height: 408px;
  padding: 32px;
`;

const Header = styled.div`
  display: flex;
  align-items: space-between;
`;

const FirstLine = styled(HorizontalDivider)`
  margin-top: 20px;
`;

const TransactionRow = styled.div`
  display: flex;
  align-items: center;
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 24px;
`;

const Transaction = styled(Title)`
  font-size: 14px;
`;

const Value = styled(Title)`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 14px;
  letter-spacing: 0em;
  align-self: flex-start;
`;

const LatestTransactions: React.FC = () => {
  const { transactionsData: transactions } = useTransactionsAPI();
  return (
    <TransactionsCard>
      <Header>
        <Title>Latest Transactions</Title>
      </Header>
      {transactions &&
        transactions.map(
          (
            transaction: { description: string; date: string; amount: number },
            index: number
          ) => {
            const { description, date, amount } = transaction;
            const divider = index === 0 ? <FirstLine /> : <HorizontalDivider />;
            return (
              <>
                {divider}
                <TransactionRow>
                  <Avatar />
                  <TransactionDetails>
                    <Transaction>{description}</Transaction>
                    <SubTitle>{date}</SubTitle>
                  </TransactionDetails>
                  <Value>${amount}</Value>
                </TransactionRow>
              </>
            );
          }
        )}
    </TransactionsCard>
  );
};

export default LatestTransactions;

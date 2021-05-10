import React from "react";
import styled from "styled-components/macro";
import Card from "components/library/Card/Card";
import TopCard from "./TopCard/TopCard";
import LatestTransactions from "./LatestTransactions/LatestTransactions";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
`;

const ProjectCard = styled(Card)`
  width: 400px;
  height: 411px;
`;

const ProMilestinesCard = styled(Card)`
  width: 290px;
  height: 408px;
`;

const Dashboard: React.FC = () => {
  return (
    <>
      <TopCard />
      <CardsContainer>
        <LatestTransactions />
        <ProjectCard />
        <ProMilestinesCard />
      </CardsContainer>
    </>
  );
};

export default Dashboard;

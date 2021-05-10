import React from "react";
import styled from "styled-components/macro";
import { PageHeader } from "./pages";

const PageWrapper = styled.div`
  grid-area: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Page = styled.main`
  order: 2;
  height: 100%;
  margin-top: 48px;
`;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppHeader = styled(PageHeader)`
  order: 1;
`;

const AppLayout: React.FC<AppLayoutProps> = ({ children }: AppLayoutProps) => {
  return (
    <PageWrapper>
      <Container>
        <AppHeader />
        <Page>{children}</Page>
      </Container>
    </PageWrapper>
  );
};

export default AppLayout;

import React from "react";
import AppLayout from "components/layouts/AppLayout";
import { Dashboard } from "components/layouts/pages";
import { TransactionsAPIProvider } from "contexts/TransactionsAPI";
import GlobalStyles from "./style";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <TransactionsAPIProvider>
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </TransactionsAPIProvider>
    </>
  );
};

export default App;

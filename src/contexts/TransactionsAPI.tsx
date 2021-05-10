import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "use-http";

const TransactionsAPIContext = createContext({});

const TransactionsAPIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactionsData, setTransactionsData] = useState<
    Transaction[] | null
  >(null);
  const { get, response } = useFetch(window.env.REACT_APP_API_URL);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await get("/transactions");
      setTransactionsData(data);
      if (!response.ok) {
        throw new Error("API transactions returned an error");
      }
    };

    getTransactions();
  }, [get, response]);

  return (
    <TransactionsAPIContext.Provider value={{ transactionsData }}>
      {children}
    </TransactionsAPIContext.Provider>
  );
};

const useTransactionsAPI = (): any => useContext(TransactionsAPIContext);

export { TransactionsAPIProvider, useTransactionsAPI };

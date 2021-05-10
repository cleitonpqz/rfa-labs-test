/* eslint-disable import/no-extraneous-dependencies */
import { createServer, Model } from "miragejs";

const transactions = [
  {
    id: "56226602-d82d-4380-8806-23862ff24f56",
    description: "Individual tax return 2019",
    date: "2021-05-01T00:00:00.000Z",
    amount: 240.5,
  },
  {
    id: "5fd12f57-6249-436b-849c-2e302a25b2cd",
    description: "Individual tax return 2019",
    date: "2021-05-07T00:00:00.000Z",
    amount: 600,
  },
  {
    id: "af1f9c7c-4c8e-4b33-bbc1-9bc617389173",
    description: "Individual tax return 2016-2019",
    date: "2021-05-16T00:00:00.000Z",
    amount: 10520,
  },
];

// eslint-disable-next-line import/prefer-default-export
export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    models: {
      transaction: Model,
    },
    routes() {
      this.namespace = "api";

      this.get("/transactions", () => {
        return transactions;
      });
    },
  });
}

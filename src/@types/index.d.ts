declare interface ITransaction {
  id: string;
  description: string;
  date: string;
  amount: number;
}
declare type Transaction = ITransaction;

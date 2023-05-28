import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      <h3>History</h3>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </>
  );
};

export default TransactionList;

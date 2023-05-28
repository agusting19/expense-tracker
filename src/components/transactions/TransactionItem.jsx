import { useGlobalState } from "../../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="flex justify-between items-center bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full">
      <p>{transaction.description}</p>
      <span>{transaction.amount}</span>
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};

export default TransactionItem;

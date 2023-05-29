import { useGlobalState } from "../../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="flex justify-between items-center bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full">
      <p className="text-sm">{transaction.description}</p>
      <div>
        {transaction.amount < 0 ? (
          <span className="text-red-500 text-sm">
            -${Math.abs(transaction.amount)}
          </span>
        ) : (
          <span className="text-green-500 text-sm">
            ${Math.abs(transaction.amount)}
          </span>
        )}
        <button
          className="text-lg text-red-500 ml-2"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;

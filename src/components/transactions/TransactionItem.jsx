const TransactionItem = ({ transaction }) => {
  return (
    <div key={transaction.id}>
      <p>{transaction.description}</p>
      <span>{transaction.amount}</span>
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </div>
  );
};

export default TransactionItem;

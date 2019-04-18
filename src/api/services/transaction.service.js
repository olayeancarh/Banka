/* eslint-disable max-len */
/* eslint-disable radix */
import dummyData from '../utilz/dummyData';
import Transaction from '../models/transaction.models';

const TransactionService = {
  addNewTransaction(transaction) {
    const transactionObj = transaction;
    const transactionLenght = dummyData.transactions.length;
    transactionObj.id = dummyData.transactions[transactionLenght - 1].id + 1;
    dummyData.transactions.push(transactionObj);
    return transactionObj;
  },

  fetchAllTransactions() {
    return dummyData.transactions.map(transaction => new Transaction(transaction.id, transaction.createdOn, transaction.type, transaction.accountNumber, transaction.cashier, transaction.amount, transaction.oldBalance, transaction.newBalance));
  },
};

export default TransactionService;

/* eslint-disable max-len */
/* eslint-disable radix */
import dummyData from '../utilz/dummyData';

const TransactionService = {
  addNewTransaction(transaction) {
    const transactionObj = transaction;
    const transactionLenght = dummyData.transactions.length;
    transactionObj.id = dummyData.transactions[transactionLenght - 1].id + 1;
    dummyData.transactions.push(transactionObj);
    return transactionObj;
  },
};

export default TransactionService;

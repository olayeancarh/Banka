import TransactionService from '../services/transaction.service';
import AccountService from '../services/account.service';
import dummyData from '../utilz/dummyData';

const TransactionController = {
  addATransaction(req, res) {
    const newTransaction = req.body;
    const { accountNumber } = req.params;
    const account = dummyData.accounts.find(acct => acct.accountNumber === accountNumber);
    newTransaction.oldBalance = account.balance;
    if (newTransaction.type === 'credit') {
      newTransaction.newBalance = newTransaction.oldBalance + newTransaction.amount;
    } else if (newTransaction.type === 'debit') {
      if (newTransaction.amount > newTransaction.oldBalance) {
        return res.json({
          status: 201,
          data: 'Insufficient funds',
        });
      }
      newTransaction.newBalance = newTransaction.oldBalance - newTransaction.amount;
    }
    account.balance = newTransaction.newBalance;
    const createdTransaction = TransactionService.addNewTransaction(newTransaction);
    AccountService.updateAnAccount(account, accountNumber);
    return res.json({
      status: 201,
      data: createdTransaction,
    });
  },
};

export default TransactionController;

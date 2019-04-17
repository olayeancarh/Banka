import TransactionService from '../services/transaction.service';
import AccountService from '../services/account.service';
import dummyData from '../utilz/dummyData';

class TransactionController {
  static debitAccount(req, res) {
    const newTransaction = req.body;
    const { accountNumber } = req.params;
    const account = dummyData.accounts.find(acct => acct.accountNumber === accountNumber);
    newTransaction.oldBalance = account.balance;
    newTransaction.type = 'debit';
    if (newTransaction.amount > newTransaction.oldBalance) {
      return res.json({
        status: 201,
        data: 'Insufficient funds',
      });
    }
    newTransaction.newBalance = newTransaction.oldBalance - newTransaction.amount;
    account.balance = newTransaction.newBalance;
    const createdTransaction = TransactionService.addNewTransaction(newTransaction);
    AccountService.updateAnAccount(account, accountNumber);
    return res.json({
      status: 201,
      data: createdTransaction,
    });
  }

  static creditAccount(req, res) {
    const newTransaction = req.body;
    const { accountNumber } = req.params;
    const account = dummyData.accounts.find(acct => acct.accountNumber === accountNumber);
    newTransaction.oldBalance = account.balance;
    newTransaction.type = 'credit';
    newTransaction.newBalance = newTransaction.oldBalance + newTransaction.amount;
    account.balance = newTransaction.newBalance;
    const createdTransaction = TransactionService.addNewTransaction(newTransaction);
    AccountService.updateAnAccount(account, accountNumber);
    return res.json({
      status: 201,
      data: createdTransaction,
    });
  }

  static fetchAllTransactions(req, res) {
    const allTransactions = TransactionService.fetchAllTransactions();
    return res.json({
      status: 200,
      data: allTransactions,
    }).status(200);
  }
}

export default TransactionController;

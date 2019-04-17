import AccountService from '../services/account.service';
import dummyData from '../utilz/dummyData';

class AccountController {
  static addAnAccount(req, res) {
    const newAccount = req.body;
    const createdAccount = AccountService.addNewAccount(newAccount);
    return res.json({
      status: 201,
      data: createdAccount,
    });
  }

  static updateAnAccount(req, res) {
    const oldAccount = req.body;
    const { accountNumber } = req.params;
    const accountInDb = dummyData.accounts.find(acc => acc.accountNumber === accountNumber);
    if (!accountInDb) {
      return res.json({
        status: 401,
        data: 'The account number does not exist',
      });
    }
    const updatedAccount = AccountService.updateAnAccount(oldAccount, accountNumber);
    return res.json({
      status: 201,
      data: updatedAccount,
    }).status(201);
  }

  static deleteAnAccount(req, res) {
    const { accountNumber } = req.params;
    AccountService.deleteAnAccount(accountNumber);
    return res.json({
      status: 201,
      message: 'Account successfully deleted',
    }).status(201);
  }

  static fetchAllAccounts(req, res) {
    const allAccounts = AccountService.fetchAllAccounts();
    return res.json({
      status: 200,
      data: allAccounts,
    }).status(200);
  }

  static fetchAnAccount(req, res) {
    const { accountNumber } = req.params;
    const account = AccountService.fetchAnAccount(accountNumber);

    return res.json({
      status: 200,
      data: account,
    }).status(200);
  }
}

export default AccountController;

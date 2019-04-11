import AccountService from '../services/account.service';

const AccountController = {
  addAnAccount(req, res) {
    const newAccount = req.body;
    const createdAccount = AccountService.addNewAccount(newAccount);
    return res.json({
      status: 201,
      data: createdAccount,
    });
  },

  updateAnAccount(req, res) {
    const oldAccount = req.body;
    const { id } = req.params;
    console.log(oldAccount);
    const updatedAccount = AccountService.updateAnAccount(oldAccount, id);
    return res.json({
      status: 201,
      data: updatedAccount,
    }).status(201);
  },

  deleteAnAccount(req, res) {
    const { id } = req.params.id;
    AccountService.deleteAnAccount(id);
    return res.json({
      status: 201,
      message: 'Account successfully deleted',
    }).status(201);
  },
};

export default AccountController;

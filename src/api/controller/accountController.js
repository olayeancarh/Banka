/* eslint-disable consistent-return */
import helpers from '../utilz/helpers';
import AccountService from '../services/account.service';
import UserService from '../services/user.service';

class AccountController {
  static addAnAccount(req, res) {
    const newAccount = req.body;
    newAccount.accountNumber = helpers.randAccountNum(10);
    if (!helpers.addAccount(newAccount)) return res.status(401).json({ status: 401, data: 'amount cannot be negative, amount/owner/type/balance cannot be empty' });
    UserService.getAUser(newAccount.owner).then((owner) => {
      if (!owner.rows[0]) return res.status(404).json({ status: 404, data: 'User does not exist' });
      return owner.rows[0];
    }).then((accountOwner) => {
      const createdAccount = AccountService.addNewAccount(newAccount);
      createdAccount.then((acc) => {
        acc.rows[0].firstName = accountOwner.firstname;
        acc.rows[0].lastName = accountOwner.lastname;
        acc.rows[0].email = accountOwner.email;
        return res.status(201).json({ status: 201, data: acc.rows[0] });
      });
    });
  }
}

export default AccountController;

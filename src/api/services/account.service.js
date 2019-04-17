/* eslint-disable max-len */
/* eslint-disable radix */
import dummyData from '../utilz/dummyData';
import Account from '../models/account.models';

class AccountService {
  static addNewAccount(account) {
    const accountObj = account;
    const accountLenght = dummyData.accounts.length;
    const accountOwner = dummyData.users.find(user => user.id === accountObj.owner);
    accountObj.id = dummyData.accounts[accountLenght - 1].id + 1;
    accountObj.firstName = accountOwner.firstName;
    accountObj.lastName = accountOwner.lastName;
    accountObj.email = accountOwner.email;
    dummyData.accounts.push(accountObj);
    return accountObj;
  }

  static updateAnAccount(account, accountNumber) {
    const accountObj = account;
    const accountInDb = dummyData.accounts.find(acc => acc.accountNumber === accountObj.accountNumber);
    const accountObjIndex = dummyData.accounts.findIndex(accounts => accounts.accountNumber === accountNumber);
    const accountOwner = dummyData.users.find(user => user.id === accountObj.owner);
    const updatedAcct = {
      accountNumber: accountInDb.accountNumber,
      createdOn: accountInDb.createdOn,
      owner: accountInDb.owner,
      type: accountObj.type || accountInDb.type,
      status: accountObj.status || accountInDb.status,
      balance: accountObj.balance || accountInDb.balance,
      id: accountInDb.id,
    };
    updatedAcct.firstName = accountOwner.firstName;
    updatedAcct.lastName = accountOwner.lastName;
    updatedAcct.email = accountOwner.email;
    updatedAcct.accountNumber = accountNumber;
    dummyData.accounts[accountObjIndex] = updatedAcct;
    return updatedAcct;
  }

  static deleteAnAccount(accountNumber) {
    const getAccountIndex = dummyData.accounts.findIndex(account => account.accountNumber === accountNumber);
    dummyData.accounts.splice(getAccountIndex, 1);
  }

  static fetchAllAccounts() {
    return dummyData.accounts
      .map(account => new Account(account.id, account.accountNumber, account.createdOn, account.owner, account.type, account.status, account.balance));
  }

  static fetchAnAccount(accountNumber) {
    return dummyData.accounts
      .find(account => account.accountNumber === accountNumber);
  }
}

export default AccountService;

/* eslint-disable radix */
import dummyData from '../utilz/dummyData';

const AccountService = {
  addNewAccount(account) {
    const accountObj = account;
    const accountLenght = dummyData.accounts.length;
    accountObj.id = dummyData.accounts[accountLenght - 1].id + 1;
    dummyData.accounts.push(accountObj);
    return accountObj;
  },

  updateAnAccount(account, id) {
    const accountObj = account;
    const accountObjIndex = dummyData.accounts.findIndex(accounts => accounts.id === parseInt(id));
    accountObj.id = id;
    dummyData.accounts[accountObjIndex] = accountObj;
    return accountObj;
  },

  deleteAnAccount(id) {
    const getAccountIndex = dummyData.accounts.findIndex(account => account.id === parseInt(id));
    dummyData.accounts.splice(getAccountIndex, 1);
  },
};

export default AccountService;

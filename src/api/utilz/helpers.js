/* eslint-disable max-len */
class Helper {
  /**
   * Validate empty params for sign up
   * @param {object} user
   * @returns {Boolean} return true or false
   */
  static userSignup(user) {
    if (!user.email || !user.password || !user.firstName || !user.lastName) return false;
    return true;
  }

  /**
   * Validate empty params for sign up
   * @param {string} email
   * @param {string} password
   * @returns {Boolean} return true or false
   */
  static userSignin(email, password) {
    if (!email || !password) return false;
    return true;
  }

  /**
   * Validate empty params for creating an account
   * @param {object} account
   * @returns {Boolean} return true or false
   */
  static addAccount(account) {
    if (!account.accountNumber || !account.owner || !account.type || !account.status || !account.balance || account.balance < 0) return false;
    return true;
  }

  static randAccountNum(n) {
    // eslint-disable-next-line no-restricted-properties
    return Math.floor(Math.pow(10, n - 1) + Math.random() * (Math.pow(10, n) - Math.pow(10, n - 1) - 1));
  }
}

export default Helper;

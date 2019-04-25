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
}

export default Helper;

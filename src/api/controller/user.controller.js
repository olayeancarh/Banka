import UserService from '../services/user.service';
import dummyData from '../utilz/dummyData';

const UserController = {
  addAUser(req, res) {
    const newUser = req.body;
    const emailExists = dummyData.users.find(users => users.email === newUser.email);
    if (emailExists) {
      return res.json({
        status: 401,
        data: 'This email is associated with a Banka account',
      });
    } if ([newUser.email, newUser.firstName, newUser.lastName, newUser.password].includes('')) {
      return res.json({
        status: 401,
        data: 'All fields are required',
      });
    }
    const createdUser = UserService.addNewUser(newUser);
    return res.json({
      status: 201,
      data: createdUser,
    });
  },
};

export default UserController;

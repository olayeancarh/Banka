import UserService from '../services/user.service';

const UserController = {
  addAUser(req, res) {
    const newUser = req.body;
    const createdUser = UserService.addNewUser(newUser);
    return res.json({
      status: 201,
      data: createdUser,
    });
  },
};

export default UserController;

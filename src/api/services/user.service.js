import dummyData from '../utilz/dummyData';

const UserService = {
  addNewUser(user) {
    const userObj = user;
    const userLenght = dummyData.users.length;
    userObj.id = dummyData.users[userLenght - 1].id + 1;
    dummyData.users.push(userObj);
    return userObj;
  },
};

export default UserService;

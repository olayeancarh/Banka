"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  users: [{
    id: 1,
    email: 'lawal.bello@yahoo.com',
    firstName: 'Lawal',
    lastName: 'Bello',
    password: '$2b$10$HGLq1nJe8FaIpGcElhyhF.m67NGHOL8sN5GEgcKvt.anrdQKF6HIO',
    type: 'client',
    isAdmin: 'false'
  }, {
    id: 2,
    email: 'dike.paul@gmail.com',
    firstName: 'Dike',
    lastName: 'Paul',
    password: 'golden',
    type: 'staff',
    isAdmin: 'false'
  }, {
    id: 3,
    email: 'ola.wale@gmail.com',
    firstName: 'Olamide',
    lastName: 'Olawale',
    password: 'golden',
    type: 'staff',
    isAdmin: 'false'
  }, {
    id: 4,
    email: 'nnamdi.eze@yahoo.com',
    firstName: 'Nnamdi',
    lastName: 'Ezedigbo',
    password: 'golden',
    type: 'staff',
    isAdmin: 'true'
  }, {
    email: 'ola1.wale@gmail.com',
    firstName: 'Olamide',
    lastName: 'Olawale',
    password: '$2b$10$HGLq1nJe8FaIpGcElhyhF.m67NGHOL8sN5GEgcKvt.anrdQKF6HIO',
    type: 'staff',
    isAdmin: false,
    id: 5
  }],
  accounts: [{
    id: 1,
    accountNumber: '0019898982',
    createdOn: 'Mon Feb 18 2019 09:15:03',
    owner: 1,
    type: 'savings',
    status: 'active',
    balance: 46888.09
  }],
  transactions: [{
    id: 1,
    createdOn: 'Mon Feb 18 2019 09:15:03',
    type: 'credit',
    accountNumber: '0019898982',
    cashier: 2,
    amount: 10000.00,
    oldBalance: 46888.09,
    newBalance: 36888.09
  }]
};
exports["default"] = _default;
//# sourceMappingURL=dummyData.js.map
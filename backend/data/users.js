import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('11223344', 10),
    isAdmin: true,
  },

  {
    name: 'Shira Shahar',
    email: 'shaharshira108@gmail.com',
    password: bcrypt.hashSync('11223344', 10),
    isAdmin: false,
  },

  {
    name: 'Test Test',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('11223344', 10),
    isAdmin: false,
  },
];

export default users;

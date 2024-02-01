import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @  Auth user and get the token
// POST --> /api/users/login
// public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check for user
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @  Register
// POST --> /api/users/login
// public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @  Logout user / clear cookie
// POST --> /api/users/logout
// private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @  get user profile / clear cookie
// GET --> /api/users/profile   **using the token
// private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @ update user profile
// PUT --> /api/users/profile
// private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @ get the users
// GET --> /api/users
// private/ admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});

// @ get user by ID
// GET --> /api/users/:id
// private/ admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send('get user by ID');
});

// @ del user
// DELETE --> /api/users/:id
// private/ admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

// @ Update user
// PUT --> /api/users/:id
// private/ admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};

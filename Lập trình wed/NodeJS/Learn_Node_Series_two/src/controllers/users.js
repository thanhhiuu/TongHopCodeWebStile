import User from "../Models/User.js";

export const getAllUsers = async (req, res, next) => {
  res.send("Get all users");
};

export const deleteUser = async (req, res, next) => {
  res.send("Delete user");
};

// export const addUser = async (req, res, next) => {
//   try {
//     const users = await User({ ...req.body });
//     await users.save();
//     res.status(200).json(users);
//   } catch (error) {
//     next("Tạo không thành công user" + error);
//   }
// };

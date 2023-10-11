import { createError } from "../../error.js";
import User from "../Models/User.js";
import bcrypt from "bcrypt";
const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
export const signIns = async (req, res, next) => {
  try {
    const user = await Promise.resolve(
      new User({
        ...req.body,
        password: hashPassword(req.body.password),
      })
    );
    console.log(user);
    await user.save();
    res.status(200).json("Đăng ký thành công");
  } catch (error) {
    next(createError(400, error.message));
  }
};

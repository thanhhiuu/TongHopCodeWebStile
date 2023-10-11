import * as auth from "../services/index.js";

export const signIn = async (res, req, next) => {
  try {
    const result = await auth.signIn();
    return req.status(200).json("Đăng nhập thành công " + result);
  } catch (error) {
    return next(" có lỗi ở signIn " + error);
  }
};

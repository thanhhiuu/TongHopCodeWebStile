import { createError } from "../error.js    "
import User from "../models/User.js";

// Thiết lập Router handler

// Đoạn mã này giúp cập nhật người dùng
export const update = async (req, res, next) => {

    // Dòng này check xem id từ ULR có giống id từ thông tin người dùng (JWT) hay không
    // => false: Xuất lỗi ==> return next(createError(403, "Khong cập nhật được dữ liệu"));
    if (req.params.id === req.user.id) {
        try {
            // Dòng này sử dùng bất đồng bộ await 
            // Sử dụng monggose để tìm và cập nhật bảng ghi của người dùng thông qua ID được cung cấp ( User.findByIdAndUpdate(req.params.id)
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    // ($set) Cập nhật các trường thông tin người dùng theo dữ liệu từ req.body 
                    $set: req.body
                },
                // Trả về bản ghi cập nhật (giúp ktra đã update chưa)
                { new: true } // true or false
            );
            // Trả về dạng JSON với dữ liệu người dùng đã cung cấp
            res.status(200).json(updateUser)
        } catch (err) {
            // Xuất lỗi
            next(err);
        }
    } else {
        return next(createError(403, "Khong cập nhật được dữ liệu"));
    }
}

// Đoạn này giúp xóa người dùng thông qua ID ra khỏi database
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(
                req.params.id
            );
            res.status(200).json("Xóa thành công !!")
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, "Khong cập nhật được dữ liệu"));
    }
}
export const getUser = async (req, res, next) => {
    try {
        await User.findById(req.user.id)
        res.status(200).json("Xuất người dùng thành công")
    } catch (err) {
        next(err)
    }
}
export const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribersUser: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 }
        })
        res.status(200).json("Đăng ký thành công !")
    } catch (err) {
        next(err)
    }
}
export const unSubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribersUser: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 }
        })
        res.status(200).json("Đăng ký thành công !")
    } catch (err) {
        next(err)
    }
}
export const like = (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}
export const disLike = (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}
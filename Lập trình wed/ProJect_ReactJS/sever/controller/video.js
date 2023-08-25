import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const saveVideo = await newVideo.save();
        res.status(200).send("Tạo video thành công !!1");
    } catch (error) {
        next(error);
    }
}
export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "Cập nhật video không thành công"));
        if (req.user.id === req.params.id) {
            await Video.findByIdAndDelete(req.params.id)
        }
        else {
            next(createError(403, "Khong tim thay video để xóa"));
        }
        req.status(200).json("Xóa video không thành công");

    } catch (error) {
        next(error);
    }
}
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "Cập nhật video không thành công"));
        if (req.user.id === req.params.id) {
            const updateVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },

                { new: true })
        }
        else {
            next(createError(403, "Khong tim thay video để câp nhật"));
        }
    } catch (error) {
        next(error);
    }
}
export const getVideo = async (req, res, next) => {
    try {
        const videoGet = await Video.findById(req.user.id);
        req.status(200).json(videoGet);

    } catch (error) {
        next(error);
    }
}
Math.floor(Math.random(100))
export const sub = async (req, res, next) => {
    // Cho tui hỏi đoạn này nó có sai chỗ nào không
    try {
        const user = await User.findById(req.user.id);
        const subscribersChannel = user.subscribersUser;

        const list = await Promise.all(
            subscribersChannel.map((channelID) => {
                return Video.find({ userId: channelID })
            })
        )
        res.status(200).json(list.flat());

    } catch (error) {
        next(error);
    }
}
export const random = async (req, res, next) => {
    try {
        const videoRan = await Video.aggregate([{ $sample: { size: 40 } }]);
        res.status(200).json(videoRan);

    } catch (error) {
        next(error);
    }
}
export const views = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        });
        res.status(200).json("Không thêm view được");

    } catch (error) {
        next(error);
    }
}
export const trend = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        const subscribersUser = user.subscribersUser;

        const list = Promise.all(
            subscribersUser.map((channelID) => {
                return Video.find({ videoId: channelID });
            })
        )
        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
}
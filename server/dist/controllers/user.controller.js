"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRequestFriend = exports.acceptFriend = exports.addFriend = exports.unfollow = exports.follow = exports.deleteUser = exports.updateUser = exports.userInfo = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("./../models/user.model"));
const mongoose_1 = require("mongoose");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find().select("-password");
    res.status(200).send(users);
});
exports.getAllUsers = getAllUsers;
const userInfo = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    user_model_1.default.findById(req.params.id, (err, docs) => {
        !err ? res.status(200).send(docs) : res.status(400).send({ message: err });
    }).select("-password");
};
exports.userInfo = userInfo;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        yield user_model_1.default.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                bio: req.body.bio,
            },
        }, {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
        })
            .then((docs) => {
            res.send(docs);
        })
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send({ message: err });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        yield user_model_1.default.deleteOne({ _id: req.params.id }).exec();
        res.status(200).send({ message: "Successfully deleted. " });
    }
    catch (err) {
        return res.status(400).send({ message: err });
    }
});
exports.deleteUser = deleteUser;
const follow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params.id);
    }
    else if (!mongoose_1.Types.ObjectId.isValid(req.body.idToFollow)) {
        return res.status(400).send("Follow unknown : " + req.body.idToFollow);
    }
    try {
        yield user_model_1.default.findByIdAndUpdate(req.params.id, { $addToSet: { following: req.body.idToFollow } }, { new: true, upsert: true })
            .then((docs) => res.status(200).json(docs))
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.body.idToFollow, { $addToSet: { followers: req.params.id } }, { new: true, upsert: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send({ message: err });
    }
});
exports.follow = follow;
const unfollow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params.id);
    }
    else if (!mongoose_1.Types.ObjectId.isValid(req.body.idToUnfollow)) {
        return res.status(400).send("Unfollow unknown : " + req.body.idToUnfollow);
    }
    try {
        yield user_model_1.default.findByIdAndUpdate(req.params.id, { $pull: { following: req.body.idToUnfollow } }, { new: true, upsert: true })
            .then((docs) => res.status(200).json(docs))
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.body.idToUnfollow, { $pull: { followers: req.params.id } }, { new: true, upsert: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send({ message: err });
    }
});
exports.unfollow = unfollow;
const addFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params.id);
    }
    else if (!mongoose_1.Types.ObjectId.isValid(req.params.idToFollow)) {
        return res.status(400).send("Follow unknown : " + req.params.idToFollow);
    }
    try {
        yield user_model_1.default.findByIdAndUpdate(req.params.id, { $addToSet: { friendRequestSend: req.params.idToFollow } }, { new: true, upsert: true })
            .then((docs) => res.status(200).json(docs))
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.params.idToFollow, { $addToSet: { friendRequestReceived: req.params.id } }, { new: true, upsert: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send({ message: err });
    }
});
exports.addFriend = addFriend;
const acceptFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params.id);
    }
    else if (!mongoose_1.Types.ObjectId.isValid(req.params.idToAccept)) {
        return res.status(400).send("Follow unknown : " + req.params.idToAccept);
    }
    try {
        yield user_model_1.default.findByIdAndUpdate(req.params.id, { $pull: { friendRequestSend: req.params.idToAccept } })
            .then((docs) => res.status(200).json(docs))
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.params.idToAccept, { $pull: { friendRequestReceived: req.params.id } }, { new: true, upsert: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.params.id, { $addToSet: { friends: req.params.idToAccept } }, { new: true, upsert: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.params.idToAccept, { $addToSet: { friends: req.params.id } }, { new: true, upsert: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send({ message: err });
    }
});
exports.acceptFriend = acceptFriend;
const deleteRequestFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params.id);
    }
    else if (!mongoose_1.Types.ObjectId.isValid(req.params.idToAccept)) {
        return res.status(400).send("Follow unknown : " + req.params.idToAccept);
    }
    try {
        yield user_model_1.default.findByIdAndUpdate(req.params.id, { $pull: { friendRequestSend: req.params.idToAccept } })
            .then((docs) => res.status(200).json(docs))
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.params.idToAccept, { $pull: { friendRequestReceived: req.params.id } }, { new: true, upsert: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send({ message: err });
    }
});
exports.deleteRequestFriend = deleteRequestFriend;
//# sourceMappingURL=user.controller.js.map
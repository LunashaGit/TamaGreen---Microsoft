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
exports.deleteCommentPost = exports.editCommentPost = exports.commentPost = exports.InterestedPost = exports.deleteSpot = exports.updateSpot = exports.spotInfo = exports.createSpot = exports.getAllSposts = void 0;
const question_model_1 = __importDefault(require("./../models/question.model"));
const user_model_1 = __importDefault(require("./../models/user.model"));
const mongoose_1 = require("mongoose");
const errors_utils_1 = require("./../utils/errors.utils");
const getAllSposts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const spots = yield question_model_1.default.find();
    res.status(200).send(spots);
});
exports.getAllSposts = getAllSposts;
const createSpot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { spotName, latitude, longitude, hobbies, description, creatorID } = req.body;
    try {
        const spots = yield question_model_1.default.create({ spotName, latitude, longitude, hobbies, description, creatorID });
        res.status(201).send({ spots: spots._id });
    }
    catch (err) {
        const errors = (0, errors_utils_1.createPostErrors)(err);
        res.status(400).send({ errors });
    }
});
exports.createSpot = createSpot;
const spotInfo = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    question_model_1.default.findById(req.params.id, (err, docs) => {
        !err ? res.status(200).send(docs) : res.status(400).send({ message: err });
    }).select("-password");
};
exports.spotInfo = spotInfo;
const updateSpot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        yield question_model_1.default.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                spotName: req.body.spotName,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                description: req.body.description,
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
exports.updateSpot = updateSpot;
const deleteSpot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        yield question_model_1.default.deleteOne({ _id: req.params.id }).exec();
        res.status(200).send({ message: "Successfully deleted. " });
    }
    catch (err) {
        return res.status(400).send({ message: err });
    }
});
exports.deleteSpot = deleteSpot;
const InterestedPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        yield question_model_1.default.findByIdAndUpdate(req.params.id, {
            $addToSet: { userInterestedIn: req.body.id },
        }, { new: true })
            .then()
            .catch((err) => res.status(400).send({ message: err }));
        yield user_model_1.default.findByIdAndUpdate(req.body.id, {
            $addToSet: { userInterestedIn: req.params.id },
        }, { new: true })
            .then((docs) => res.status(201).json(docs))
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
exports.InterestedPost = InterestedPost;
const commentPost = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        return question_model_1.default.findByIdAndUpdate(req.params.id, {
            $push: {
                comments: {
                    commenterId: req.body.commenterId,
                    commenterPseudo: req.body.commenterPseudo,
                    text: req.body.text,
                    timestamp: new Date().getTime(),
                },
            },
        }, { new: true })
            .then((docs) => res.status(201).send(docs))
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send(err);
    }
};
exports.commentPost = commentPost;
const editCommentPost = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        return question_model_1.default.findById(req.params.id, (err, docs) => {
            const theComment = docs.comments.find((comment) => comment._id.equals(req.body.commentId));
            if (!theComment)
                return res.status(400).send("Comment not found");
            theComment.text = req.body.text;
            return docs.save((err) => {
                if (!err)
                    return res.status(200).send(docs);
                return res.status(500).send(err);
            });
        });
    }
    catch (err) {
        return res.status(400).send(err);
    }
};
exports.editCommentPost = editCommentPost;
const deleteCommentPost = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        return question_model_1.default.findByIdAndUpdate(req.params.id, {
            $pull: {
                comments: {
                    _id: req.body.commentId,
                },
            },
        }, { new: true })
            .then((docs) => res.status(201).send(docs))
            .catch((err) => res.status(400).send({ message: err }));
    }
    catch (err) {
        return res.status(400).send(err);
    }
};
exports.deleteCommentPost = deleteCommentPost;
//# sourceMappingURL=spot.controller.js.map
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
exports.deleteQuestion = exports.updateQuestion = exports.questionInfo = exports.createQuestion = exports.getAllQuestion = void 0;
const question_model_1 = __importDefault(require("../models/question.model"));
const mongoose_1 = require("mongoose");
const errors_utils_1 = require("../utils/errors.utils");
const getAllQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const question = yield question_model_1.default.find();
    res.status(200).send(question);
});
exports.getAllQuestion = getAllQuestion;
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { question, answerA, answerB, ecologyA, moneyA, wellBeingA, healthA, ecologyB, moneyB, wellBeingB, healthB, didUKnow } = req.body;
    try {
        const questionGlobal = yield question_model_1.default.create({ question, answerA, answerB, ecologyA, moneyA, wellBeingA, healthA, ecologyB, moneyB, wellBeingB, healthB, didUKnow });
        res.status(201).send({ question: questionGlobal._id });
    }
    catch (err) {
        const errors = (0, errors_utils_1.createQuestionErrors)(err);
        res.status(400).send({ err });
    }
});
exports.createQuestion = createQuestion;
const questionInfo = (req, res) => {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    question_model_1.default.findById(req.params.id, (err, docs) => {
        !err ? res.status(200).send(docs) : res.status(400).send({ message: err });
    }).select("-password");
};
exports.questionInfo = questionInfo;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        yield question_model_1.default.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                question: req.body.question,
                answerA: req.body.answerA,
                answerB: req.body.answerB,
                ecologyA: req.body.ecologyA,
                moneyA: req.body.moneyA,
                wellBeingA: req.body.wellBeingA,
                healthA: req.body.healthA,
                ecologyB: req.body.ecologyB,
                moneyB: req.body.moneyB,
                wellBeingB: req.body.wellBeingB,
                healthB: req.body.healthB,
                didUKnow: req.body.didUKnow,
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
exports.updateQuestion = updateQuestion;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.deleteQuestion = deleteQuestion;
//# sourceMappingURL=question.controller.js.map
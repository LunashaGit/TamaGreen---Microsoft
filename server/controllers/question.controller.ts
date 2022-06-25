import { Request, Response } from "express";
import QuestionModel from "../models/question.model";
import { Types } from "mongoose";
import { createQuestionErrors } from "../utils/errors.utils";

export const getAllQuestion = async (req: Request, res: Response) => {
  const question = await QuestionModel.find();
  res.status(200).send(question);
};

export const createQuestion = async (req: Request, res: Response) => {
  const { question, answerA, answerB, ecologyA, moneyA, wellBeingA, healthA, ecologyB, moneyB, wellBeingB, healthB, didUKnow } = req.body;

  try {
    const questionGlobal = await QuestionModel.create({ question, answerA, answerB, ecologyA, moneyA, wellBeingA, healthA, ecologyB, moneyB, wellBeingB, healthB, didUKnow });
    res.status(201).send({ question: questionGlobal._id });
  } catch (err) {
    const errors = createQuestionErrors(err);
    res.status(400).send({ err });
  }
};

export const questionInfo = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  QuestionModel.findById(req.params.id, (err: string, docs: string) => {
    !err ? res.status(200).send(docs) : res.status(400).send({ message: err });
  }).select("-password");
};

export const updateQuestion = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try{
    await QuestionModel.findOneAndUpdate(
      { _id: req.params.id },
      {
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
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    )
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => res.status(400).send({ message: err }));
  }catch(err){
    return res.status(400).send({ message: err });
  }
}

export const deleteQuestion = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await QuestionModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).send({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

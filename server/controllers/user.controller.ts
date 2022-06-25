import { Request, Response } from "express";
import UserModel from "./../models/user.model";
import { Types } from "mongoose";
import { production } from "../data/production";
export const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserModel.find().select("-password");
  res.status(200).send(users);
};

export const userInfo = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err: string, docs: string) => {
    !err ? res.status(200).send(docs) : res.status(400).send({ message: err });
  }).select("-password");
};

export const updateUser = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          pseudo: req.body.pseudo,
          email: req.body.email
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
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await UserModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).send({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

export const addEnergy = async (req: Request, res: Response) => {
  (await UserModel.find()).forEach(async element => {
    let theDate = new Date().getHours();
    try{
      if(element.energy >= 11){
        console.log("Max")
      } else {
        production.forEach(pro => {
          if(theDate == pro.hours){
            if(pro.pick >= 0.50 ){
              element.updateOne({$inc: {energy: +1}}).exec();
            } else if(pro.pick >= 0.80){
              element.updateOne({$inc: {energy: +2}}).exec();
            }
          }
        })
      }
    } catch(err){
      return console.log(err)
    }
  });
}

export const statUpload = async(req: Request, res: Response) => {
  try{
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $inc: {
        ecology: req.body.ecology,
        money: req.body.money,
        wellBeing: req.body.wellBeing,
        health: req.body.health,
      }},
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    )
    .then((docs) => res.status(201).send(docs))
    .catch((err) => res.status(500).send({ message: err }));
  } catch(err){
    return res.status(500).send({ message: err });
  }
}

setInterval(addEnergy, 1000 * 60 * 3)
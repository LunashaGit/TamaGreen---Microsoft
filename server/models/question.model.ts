import mongoose, { Schema, Document, Model } from "mongoose";

interface IQuestion {
    question : string;
    answerA : string;
    answerB: string;
    ecologyA: number;
    moneyA: number;
    wellBeingA: number;
    healthA: number;
    ecologyB: number;
    moneyB: number;
    wellBeingB: number;
    healthB: number;
    didUKnow: string;
}

interface IQuestionDocument extends IQuestion, Document { }

interface IQuestionModel extends Model<IQuestionDocument> {
  login: (email: string, password: string) => Promise<IQuestionDocument>;
}
const questionSchema: Schema<IQuestionDocument> = new Schema(
    {
      question: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 255,
        unique: true,
        trim: true,
      },
      answerA :{
        type : String,
        required: true,
      },
      answerB :{
        type : String,
        required: true,
      },
      ecologyA :{
        type : Number,
        required: true,
      },
      moneyA :{
        type : Number,
        required: true,
      },
      wellBeingA :{
        type : Number,
        required: true,
      },
      healthA :{
        type : Number,
        required: true,
      },
      ecologyB :{
        type : Number,
        required: true,
      },
      moneyB :{
        type : Number,
        required: true,
      },
      wellBeingB :{
        type : Number,
        required: true,
      },
      healthB :{
        type : Number,
        required: true,
      },
      didUKnow :{
        type : String,
        required: true,
        minLength: 8,
        maxLength: 255,
        unique: true,
        trim: true,
      },
      
    }
);

const QuestionModel = mongoose.model<IQuestionDocument, IQuestionModel>("question", questionSchema);

export default QuestionModel;
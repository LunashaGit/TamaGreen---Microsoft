import mongoose, { Schema, Document, Model } from "mongoose";

interface IQuestion {
    question : string;
    answerA : string;
    answerB: string;
    happiness: number;
    money: number;
    wellBeing: number;
    health: number;
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
      happiness :{
        type : Number,
        required: true,
      },
      money :{
        type : Number,
        required: true,
      },
      wellBeing :{
        type : Number,
        required: true,
      },
      health :{
        type : Number,
        required: true,
      },
    }
);

const QuestionModel = mongoose.model<IQuestionDocument, IQuestionModel>("question", questionSchema);

export default QuestionModel;
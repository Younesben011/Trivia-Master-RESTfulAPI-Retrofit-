import mongoose from "mongoose";
import mongodb from "mongodb";
import Category from "./Categories.js";
import Question from "./Question.js";
const QuizeSchema = mongoose.Schema(
    {
        quizName:String,
        category:{
            type:mongodb.ObjectId,
            ref:"Category"
        },
        questions:{
            type:[mongodb.ObjectId],
            default:[],
            ref:"Question"
        },
        points:{
            type:Number,
            default:0,
        },
        solved:{
            type:Boolean,
            default:false
        }
    }
)

const quiz= mongoose.model("quiz",QuizeSchema)
export default quiz


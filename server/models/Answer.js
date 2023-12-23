import mongoose from "mongoose";
import mongodb from "mongodb";
import Question from "./Question.js";

const AnswerSchema = mongoose.Schema(
    {
        answerAr:String,
        answerEng:String,
        points:Number,
        question:{
            type:mongodb.ObjectId,
            ref:"Question"
        }
    }
)
AnswerSchema.post('save',async function(next){
    const _question=await Question.findOne({_id:new mongodb.ObjectId(this.question)})
    console.log(this.question);
    console.log(_question);
    _question.Answers=[..._question.Answers,this._id]
    _question.save()
    // next()
})
const answer= mongoose.model("answer",AnswerSchema)
export default answer


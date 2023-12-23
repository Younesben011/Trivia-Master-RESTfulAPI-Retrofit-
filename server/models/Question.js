import mongoose, { Model } from "mongoose";
import mongodb from "mongodb";
import quiz from "./Quiz.js";

const QuestionSchema = mongoose.Schema(
    {
        QuestionEn:{
            type:String,
            default:""
        },
        QuestionAr:{
            type:String,
            default:"",
        },
        Answers:{
            type:[mongodb.ObjectId],
            default:[],
            ref:"answer"
        },
        quiz:{
            type:mongodb.ObjectId
        }
       
    },{timestamps:true}
)
// Model.post
QuestionSchema.post('save',async function(next){
    console.log(new mongodb.ObjectId(this.quiz));
    const Quiz=await quiz.findOne({_id:new mongodb.ObjectId(this.quiz)})
    console.log(Quiz);
    Quiz.questions=[...Quiz.questions,this._id]
    Quiz.save()
    // next()
})
const Question = mongoose.model("Question",QuestionSchema)
export default Question
import mongoose from "mongoose";
import mongodb from "mongodb";
import User from "./User.js";
const statisticSchema = mongoose.Schema({
    user:{
        type:mongodb.ObjectId,
        immutable:true,
        ref:"User",
        
    },
    total_points:Number,
    solved_quizzes:Number,
    unsolved_quizzes:Number,
})

const Statistic =mongoose.model("Statistic",statisticSchema)
export default Statistic
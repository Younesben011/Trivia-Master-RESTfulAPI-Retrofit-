import mongoose from "mongoose";
import mongodb from "mongodb"
const TestSchema = mongoose.Schema(
    {
        user:{
            type:mongodb.ObjectId,
            require:true,
            ref:"User"
        },
        quiz:{
            type:mongodb.ObjectId,
            require:true,
            ref:"Quiz"
        },
        earned_points:{
            type:Number,
            default:0,
        }
    }
)
const test = mongoose.model("test",TestSchema)
export default test



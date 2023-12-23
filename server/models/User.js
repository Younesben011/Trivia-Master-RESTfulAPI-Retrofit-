import mongoose from "mongoose";
// import stati from "./"
import mongodb from "mongodb"
import Statistic from "./statistics.js";
const UserSchema = mongoose.Schema(
    {
        userName:{
            type:String,
            require:true,
            unique:true,
            min:2,
            max:30
        },
        firstName:{
            type:String,
            required:true,
            min:2,
            max:50
        },
        lastName:{
            type:String,
            min:2,
            max:50
        },
        PicturePath:{
            type:String,
            default:""
        },
        password:{
            type:String,
            required:true,
            min:8,
            max:50
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false,
        },
        tests:{
            type:[mongodb.ObjectId],
            default:[],
            ref:"test"
        }

    },{timestamps:true})
    UserSchema.post('save',async function(next){
        const statistic = new Statistic({user:this._id})
        statistic.save()
    })
    const User = mongoose.model("User",UserSchema)
    export default User
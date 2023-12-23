import User from "../models/User.js"
import {getId} from "./SupportFunctions.js"

export const getUsers= async (req,res)=>{
    let users=[]
    try {
        const id = req.query.id
        if(id){
            var _id = getId(id,res)
            if(!_id)
                return
        }
        const fillter = _id?{_id:_id}:{}
        users = await User.find({})
        res.status(201).json({status:201,users:users});
        return users
    } catch (error) {
        res.status(500).json({error:error.message})
    }

};

export const getUsersCount= async (req,res)=>{
    let users=[]
    try {
        const id = req.query.id
        if(id){
            var _id = getId(id,res)
            if(!_id)
                return
        }
        const fillter = _id?{_id:_id}:{}
        users = await User.find({})
        res.status(200).json({status:200,item:"User",count:users.length});
        return users
    } catch (error) {
        res.status(500).json({error:error.message})
    }

};


export const deleteUser= async (req,res)=>{
var deletedUser
    try {
        const {id} = req.query
        const _id=getId(id,res)
        if(!_id)
            return
        // Model.findByIdAndDelete
        deletedUser=await User.findByIdAndDelete({_id:_id})
        res.status(200).json({message:"deleted"});
        
    } catch (err) {
        res.status(500).json({error:err.message})

    }
}
export const editUsers= async (req,res)=>{}
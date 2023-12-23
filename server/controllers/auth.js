import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import question from "../models/Question.js";


// REGISTER USER
export const test= async(req,res)=>{
	res.status(201).json({data:"wellcom"});
}

export const register = async(req,res)=>{

    try {
        const {
            userName,
            firstName,
            lastName,
            picturePath,
            isAdmin,
            password,
        }= req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt)
        
        const newUser = new User({
            userName,
            firstName,
            lastName,
            picturePath,
            isAdmin,
            password:passwordHash,
        })
        const savedUser = await newUser.save();
        res.status(201).json({status:201,user:savedUser}); /* status 201 in case that somthing is created 👌 */

    } catch (err) {
        res.status(500).json({status:500,err:err.message})
    }
}


// LOGIN
export const login= async(req,res)=>{
    try {
       const {userName,password}=req.body;
       console.log(userName,password);
        const user = await User.findOne({userName:userName})
        if(!user){
            res.status(400).json({msg:"user does not exist. "});
            return
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            res.status(400).json({msg:"Wrong password. "});
            return

        }
        const token = jwt.sign({id:user.id},process.env.JWt_SECRET)
        user.password=""
        console.log(token)
        res.status(200).json({token,user});
    } catch (err) {
        res.status(500).json({error:err.message})
    }
};








import test from "../models/Test.js";
import { getId } from "./SupportFunctions.js";


export const addTest = async (req,res)=>{
    try {
        const{user,quiz,}= req.body
        const userId =getId(user)
        const quizId =getId(user)
        if(!(userId&& quizId))
            return
        const newTest = new test({user,quiz,})
        const savedTest = await newTest.save()
        res.status(201).json(savedTest); /* status 201 in case that somthing is created 👌 */
    } catch (err) {
        res.status(500).json({error:err.message})
        
    }
}
export const UpdateTest = async (req,res)=>{
    try {
        const{user,quiz,}= req.query
        const{earned_points}= req.body
        const userId =getId(user)
        const quizId =getId(user)
        if(!(userId&& quizId))
            return
        const test = findOne({user,quiz,})
        if(earned_points)test.earned_points=earned_points
        const savedTest = await test.save()
        res.status(201).json(savedTest); /* status 201 in case that somthing is created 👌 */
    } catch (err) {
        res.status(500).json({error:err.message})
        
    }
}
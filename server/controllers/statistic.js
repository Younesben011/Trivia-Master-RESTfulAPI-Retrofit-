import Statistic from "../models/statistics.js";
import { getAnswers } from "./Answers.js";
import { getId } from "./SupportFunctions.js";


export const getStatistics =async(req,res)=>{
    try {
        const {user} = req.query
        user_id = getId(user)
        if(!user_id)
            return
        const statistics = Statistic.findOne({user:user_id})


    } catch (error) {
        res.send(500).json({error:error.message})
    }
}

export const updateStatistics = async(req,res)=>{
    try {
        const {user} = req.query
        const{
            total_points,
            solved_quizzes,
            unsolved_quizzes}=req.body
        user_id = getId(user)
        if(!user_id)
            return
        const stat=Statistic.findOne({user:user_id})
        if(total_points)stat.total_points=total_points
        if(solved_quizzes)stat.solved_quizzes=solved_quizzes
        if(unsolved_quizzes)stat.unsolved_quizzes=unsolved_quizzes

    } catch (error) {
        
    }
}
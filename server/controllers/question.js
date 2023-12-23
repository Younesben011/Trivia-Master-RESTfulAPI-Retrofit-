import { get } from "mongoose";
import Question from "../models/Question.js";
import mongodb from "mongodb"
import { getUsers } from "./user.js";


export const addQuestion = async(req,res)=>{
    try {
        // var users=[]
        const userId =req.query.id
        const users = await getUsers(req,res)
        console.log(users[0]);
        const{QuestionEnglish,
            QuestionArabic,
            Answers,
            Quiz}= req.body
            console.log( req.body);
        const quiz= getId(Quiz,res)
        if(!quiz)
            return
        const newQuestion = Question(
            {QuestionEnglish,
            QuestionArabic,
            Answers,quiz})
        const savedQusetion = await newQuestion.save()
        
        res.status(201).json(savedQusetion); /* status 201 in case that somthing is created 👌 */

    } catch (err) {
        console.log(err);
        res.status(500).json({error:err.message})
    }
}

export const editQuestion = async(req,res)=>{
    try {
        const {
            id,
            QuestionEnglish,
            QuestionArabic,
            Answers,} = req.body
        const _id =getId(id)
        if(!_id)
        return
        const question =Question.findOne({_id:_id})
        if (QuestionArabic)question.QuestionArabic=QuestionArabic
        if(QuestionEnglish)question.QuestionEnglish=QuestionEnglish
        if(Answers)question.Answers=Answers
        question.save()
    } catch (error) {
        
    }
}
export const deleteQuestion = async(req,res)=>{
    var deletedquestion
    try {
        const {id} = req.query
        const _id=getId(id,res)
        if(!_id)
            return
        // Model.findByIdAndDelete
        deletedquestion= await Question.findByIdAndDelete({_id:_id})
        res.status(200).json({deletedquestion:deletedquestion});
        
    } catch (err) {
        res.status(500).json({error:err.message})

    }  
}

export const getQuestions = async(req,res)=>{
    var questions=[]
    try {
        const {Quiz,id} = req.query
        var _id 
        var fillter
        if(id){
            const _id=getId(id,res)
            fillter = {_id:_id}
        }else
        if(Quiz){
            const quiz=getId(Quiz,res)
            fillter={quiz:quiz}
        }else
            fillter={}
            
        console.log(fillter);
        questions= await Question
            .find(fillter)
            .populate("Answers")
        res.status(200).json({questions:questions});
        
    } catch (err) {
        res.status(500).json({error:err.message})

    }  
}



export const getQuestionsCount = async(req,res)=>{
    var questions=[]
    try {

        questions= await Question.find({})
        res.status(200).json({status:200,item:"Questions",count:questions.length});
        
    } catch (err) {
        res.status(500).json({error:err.message})

    }  
}



const getId=(id,res)=>{
    if(!id){
        res.status(400).json({message:"missing id"});
        return
    }else
    if(id.length!=24){
        res.status(400).json({message:"id must contains 24 char"});
        return

    }
    return new mongodb.ObjectId(id)

}
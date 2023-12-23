import { Model } from "mongoose";
import Quiz from "../models/Quiz.js";
import mongodb from "mongodb"
export const addQuiz= async(req,res)=>{
    
    try {
        const{quizName,questions,category,points}= req.body
        console.log({quizName,questions,category});
        const newQuiz = Quiz(
            {quizName,questions,category})
        const savedQuiz = await newQuiz.save()
        res.status(201).json(savedQuiz); /* status 201 in case that somthing is created 👌 */
        
    } catch (err) {
        res.status(500).json({error:err.message}) 
    }
}

export const getAllQuizzes = async (req,res)=>{
    var quizzes=[]
    try {
        console.log("sss");
        const {category,id,solved} = req.query
        var _id 
        var fillter
        if(id){
            const _id=getId(id,res)

            fillter = {_id:_id}
        }else{
            fillter=category?
                        {categoryName:category}  
                    :solved?
                        {solved:solved}
                    :{}
        }
        console.log(fillter);
        // Model.
        quizzes= await Quiz
            .find(fillter)
            .populate("category")
            .populate("questions")
            console.log(quizzes);
        res.status(201).json({quizzes:quizzes});
        
    } catch (err) {
        res.status(500).json({error:err.message})

    }    

}



export const getQuizzesCount = async (req,res)=>{
    var quizzes=[]
    try {
        quizzes= await Quiz.find({})
        res.status(200).json({status:200,item:"Quizzes",count :quizzes.length});
        
    } catch (err) {
        res.status(500).json({error:err.message})

    }    

}




export const getQuizzesByCategory = async (req,res)=>{
    var quizzes=[]
    try {
        const {category} = req.query
        console.log(category);
        quizzes= await Quiz.find({category:category})
        res.status(200).json({quizzes:quizzes});
        
    } catch (err) {
        res.status(500).json({error:err.message})

    }    

}
export const deleteQuiz = async (req,res)=>{
    var deletedQuiz
    try {
        const {id} = req.query
        const _id=getId(id,res)
        if(!_id)
            return
        // Model.findByIdAndDelete
        deletedQuiz= await Quiz.findByIdAndDelete({_id:_id})
        res.status(200).json({deletedQuiz:deletedQuiz});
        
    } catch (err) {
        res.status(500).json({error:err.message})

    }    
}
export const solveQuiz = async (req,res)=>{
    try {
        const {id} = req.query
        const _id=getId(id,res)
        if(!_id)
        return
        // Model.findByIdAndDelete
        const updatedQuiz= await Quiz.findByIdAndUpdate({_id:_id},{solved:true})
        if(updatedQuiz)
            res.status(200).json({update:"done"});
        else
            res.status(400).json({update:"can't find a quiz with this id"});
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


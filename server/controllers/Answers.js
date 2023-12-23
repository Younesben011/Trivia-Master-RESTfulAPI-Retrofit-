import answer from "../models/Answer.js"
import mongodb from "mongodb";

export const addAnswer = async(req,res)=>{
    try {
        
        const{answerAr,
            answerEng,
            points,
            question,}= req.body
        const question_id= getId(question,res)
        if(!question_id)
            return
        const newAnswer = answer(
            {answerAr,
            answerEng,
            points
            ,question:question_id})
        const savedAnswer = await newAnswer.save()
        
        res.status(201).json(savedAnswer); /* status 201 in case that somthing is created 👌 */

    } catch (err) {
        res.status(500).json({error:err.message})
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

export const getAnswers = async(req,res)=>{
    var Answers=[]
    try {
        const {question,id} = req.query
        var _id 
        var fillter
        if(id){
            const _id=getId(id,res)
            fillter = {_id:_id}
        }else
        if(Quiz){
            const question_id=getId(question,res)
            fillter={question:question_id}
        }else
            fillter={}
            
        console.log(fillter);
        Answers= await answer.find(fillter)
        res.status(200).json({answers:Answers});
        
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
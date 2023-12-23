import mongodb from "mongodb"

export const  getId=(id,res)=>{
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
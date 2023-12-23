import Category from "../models/Categories.js";

export const addCategory= async(req,res)=>{
    
    try {
        const{Category_name}= req.body
        const newCategory = Category(
            {Category_name})
        const SavedCategory = await newCategory.save()
        res.status(201).json(SavedCategory); /* status 201 in case that somthing is created 👌 */
        
    } catch (err) {
        res.status(500).json({error:err.message}) 
    }
}

export const getAllCategories= async(req,res)=>{
    var categories=[]
    try {
        categories =await Category.find({})
        console.log(categories);
        res.status(201).json({code:201,categories:categories}); /* status 201 in case that somthing is created 👌 */
        
    } catch (err) {
        res.status(500).json({error:err.message}) 
    }
}

export const getCategoriesCount= async(req,res)=>{
    var categories=[]
    try {
        categories =await Category.find({})
        console.log(categories);
        res.status(200).json({status:200,item:"Categories",count:categories.length}); /* status 201 in case that somthing is created 👌 */
        
    } catch (err) {
        res.status(500).json({error:err.message}) 
    }
}
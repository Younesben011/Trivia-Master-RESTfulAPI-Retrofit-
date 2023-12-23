import express from "express"
import { addQuiz,deleteQuiz,getQuizzesByCategory,getAllQuizzes, solveQuiz,getQuizzesCount } from "../controllers/quiz.js"

const router = express.Router();

router.get("/",getAllQuizzes)
router.get("/count",getQuizzesCount)

// router.get("/",getQuizzesByCategory)
router.post("/add",addQuiz)
router.post("/solve",solveQuiz)
router.delete("/",deleteQuiz)



export default router
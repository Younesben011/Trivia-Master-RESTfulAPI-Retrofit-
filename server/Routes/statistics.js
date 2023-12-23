import express from "express"
import { addQuiz,deleteQuiz,getQuizzesByCategory,getAllQuizzes, solveQuiz } from "../controllers/quiz.js"
import { getStatistics, updateStatistics } from "../controllers/statistic.js";

const router = express.Router();

router.get("/",getStatistics)
// router.get("/",getQuizzesByCategory)
router.post("/update",updateStatistics)



export default router
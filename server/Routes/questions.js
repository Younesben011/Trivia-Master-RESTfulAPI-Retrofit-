import express from "express"
import { addQuestion, getQuestions,getQuestionsCount } from "../controllers/question.js"

const router = express.Router();
router.get("/",getQuestions)
router.get("/count", getQuestionsCount)
router.post("/add",addQuestion)

export default router
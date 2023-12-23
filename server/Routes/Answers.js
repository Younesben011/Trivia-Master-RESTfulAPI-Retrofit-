import express from "express"
import { addAnswer, getAnswers } from "../controllers/Answers.js"

const router = express.Router()

router.get("/",getAnswers)
router.post("/add",addAnswer)

export default router
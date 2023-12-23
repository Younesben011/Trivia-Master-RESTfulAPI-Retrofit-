import express from "express"
import { addTest } from "../controllers/test.js"

const router = express.Router();

router.post("/add",addTest)


export default router
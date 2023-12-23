import {Router} from "express"
import { addCategory,getAllCategories,getCategoriesCount } from "../controllers/categories.js"


const router =Router()

router.get("/",getAllCategories)
router.get("/count",getCategoriesCount)
router.post("/add",addCategory)

export default router
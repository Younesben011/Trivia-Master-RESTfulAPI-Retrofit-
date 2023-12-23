import express from "express"
import { getUsers,getUsersCount,deleteUser } from "../controllers/user.js"

const router = express.Router();
router.get("/",getUsers)
router.delete("/",deleteUser)
router.get("/count",getUsersCount)
export default router
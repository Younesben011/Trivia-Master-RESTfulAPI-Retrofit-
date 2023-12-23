import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from "url";
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import authRoutes from "./Routes/auth.js"
import userRoutes from "./Routes/user.js"
import questionRoutes from "./Routes/questions.js"
import quizzesRoutes from "./Routes/quizzes.js"
import testsRoutes from "./Routes/testsRoutes.js"
import categoriesRoutes from "./Routes/category.js"
import AnswersRoutes from "./Routes/Answers.js"
import  { register,test } from "./controllers/auth.js";




// CONFIGURATION
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,'public/assets')))



// Routes

app.get("/",test)
app.post("/auth/register",register) 
app.use("/auth",authRoutes) 
app.use("/users",userRoutes) 
app.use("/questions",questionRoutes) 
app.use("/quizzes",quizzesRoutes) 
app.use("/tests",testsRoutes) 
app.use("/categories",categoriesRoutes) 
app.use("/answers",AnswersRoutes) 

// Mongoose setUp
const PORT =process.env.PORT|| 6001
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,"192.168.56.1",(err)=>{

        console.log(`Server Port: ${PORT}`);})
})
.catch((err)=>{console.log(`${err} did not connect`)})
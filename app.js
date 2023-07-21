import express from "express";

import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import {config} from "dotenv" ;
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
config({
    path:"./data/config.env"
})




export const app = express();

app.use(
    cors({
     origin:[process.env.FRONTEND_URL],
     methods:["GET","post","PUT","DELETE"],
     credentials:true,  

}))


const router = express.Router();
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users",userRouter);

app.use(errorMiddleware)



  


  
   


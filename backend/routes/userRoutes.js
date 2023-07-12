import  express  from "express";
//import { recuperationPagesWebs } from "../scrawler.js";
//import mysql from "mysql2";
import { signUp, login } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.post('/signup', signUp);

userRouter.post('/login', login);

export default userRouter;
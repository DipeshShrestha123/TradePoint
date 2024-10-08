import express from "express";
import { SignUp, LogIn, LogOut } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", SignUp);
authRouter.post("/login", LogIn);
authRouter.post("/logout", LogOut);

export default authRouter; 
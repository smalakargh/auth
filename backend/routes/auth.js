import express from "express";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { authMiddleware } from "../middleware/middleware.js";

const app = express.Router();

// Register Route

app.post("/register", async (req, res)=>{
    const {name , email, password } = req.body;
    try{
        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(400).json({message:"User already exists"});
        }
        const hasedPassword = await bycrypt.hash(password,10);
        const newUser = new User({name,email,password:hasedPassword})
        await newUser.save();
    }catch(err){
        return res.status(500).json({message:err.message});
    }
});

//Login Route

app.route("/login").post(async (req,res)=>{
    const {email,password} = req.body;
    try{
        const existinguser = await User.findOne({email});
        if(!existinguser){
            return res.status(400).json({message:"User not found"});
        }
        const ismatch = await bycrypt.compare(password, existinguser.password);
        if(!ismatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = jwt.sign(
            {id:existinguser._id, name:existinguser.name},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );
        res.json({success:true, token});
    }catch(err){
        res.status(500).json({message:err.message});
    }
    
    
});

// Protected Route Example
app.get("/me", authMiddleware, (req,res)=>{
    res.json({message:`Hello ${req.user.name}, you have accessed a protected route!`});
});

export default app;
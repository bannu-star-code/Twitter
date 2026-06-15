import {User, User} from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register=async(req,res)=>{
    try{
        const {name, username, email, password}=req.body;
        if(!name || !username || !email || !password){
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        }

        const user=await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"user already exists",
                success:false
            })
        }
        const hashedPassword=await bcryptjs.hash(password,16);

        await User.create({
            name,
            username,
            email,
            password:hashedPassword
        })

        return res.status(201).json({
            message:"Account created successfully.",
            success:true
        })
    } catch(error){
        console.log(error)
    }
}


export const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email, !password){
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        };

        const User=await User.findOne({email})
        if(!user){
            return res.status(401).json({
                message:"Incorrect email or password",
                success:false
            })
        }
        const isMatch=await bcryptjs.compare(password, user.password)
        if (!isMatch){
            return res.status(401).json({
                message:"Incorrect email or password",
                success:false
            })
        }
        const tokenData={
            userId:user._id
        }
        const token=await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn:"1d"});
        return res.status(201).cookie("token", token,{
            expiresIn:"1d", httpOnly:true
        }).json({
            message:`Welcome BAck ${user.name}`,
            user,
            success:true
        })
    }catch(error){
        console.log(error)
    }
}

export const logout=async(req,res)=>{
    return res.cookie("token","", {expiresIn:new Date(Date.now())}).json({
        message:"User loggoed out successfully",
        success:true
    })
}

export const bookmark=async (req,res)=>{
    try{
        const loggedInUserId=req.body.id;
        const tweetId=req.params.id;
        const user=await User.findById(loggedInUserId);
        if(user.bookmarks.includes(tweetId)){
            await User.findByIdAndUpdate(loggedInUserId, {$pull:{bookmarks:tweeId}});
        }

    } catch(error){

    }
}

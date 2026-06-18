import {Tweet} from "../models/tweetSchema.js"
import {User} from "../models/userSchema.js"
import { getOtherUsers } from "./userController.js";

export const createTweet=async(req,res)=>{
    try{
        const {description, id}=req.body
        if(!description || !id){
            return res.status(401).json({
                message:"Fields are required",
                success:false
            });
        };
        const user=await User.findById(id).select("-password")
        await Tweet.create({
            description,
            userId:id,
            userDetail:user
        })
        return res.status(201).json({
            message:"Tweet created SuccessFully.",
            success:true,
        })
    }catch(error){
        console.log(error)
    }
}

export const deleteTweet=async(req,res)=>{
    try{
        const {id}=req.params.id;
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message:"Tweet deleted SuccessFully",
            success:true
        })
    }catch(error){
        console.log(error)
    }
}



export const likeOrDislike=async(req,res)=>{
    try{
        const loggedInUserId=req.body.id;
        const tweetId=req.params.id,
        const tweet=await Tweet.findById(tweetId);
        if(tweet.like.include(loggedInUserId)){
            //dislike
            await Tweet.findByIdAndUpdate(tweetId,{$pull:{like:loggedInUserId}})
            return res.status(200).json({
                message:"user disliked your tweet"
            })
        }else{
            //like
            await Tweet.findByIdAndUpdate(tweetId,{$push:{like:loggedInUserId}})
            return res.status(200).json({
                message:"User liked your Tweet.."
            })
        }

    }catch(error){

    }
}

export const getAllTweets=async(req,res)=>{
    try{
        const id=req.params.id
        const loggedInUser=await User.findById(id);
        const loggedInUserTweets=await Tweet.find({userId:id});
        const followingUserTweets=await Promise.all(loggedInUser.following.map((otherUsersId)=>{
            return Tweet.find({userId:otherUsersId})
        }));
        return res.status(200).json({
            tweets:loggedInUserTweets.concat(...followingUserTweets)
    })
    }catch(error){
        console.log(error)
    }

}

export const getFollowingtweets= async(req,res)=>{
    try{
        const id=req.params.id;
        const loggedInUser=await User.findById(id)
        const followingUserTweet=await Promise.all(loggedInUser.following.map((otherUsersId)=>{
            return Tweet.findById({userId:otherUsersId})
        }))
        return res.status(200).json({
            tweets:[].concat(...followingUserTweet)
        })

    }catch(error){
        console.log(error)
    }
}
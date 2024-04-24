import { BlogModel } from "../models/blog.js";
import {UserModel} from '../models/user.js';


export const createBlog = async (req, res) => {
    const {id,  heading, p,text,italic,imageUrl,isImageRight,img,name,post,detail} = req.body;
const postmanid= req.user
    // console.log(req.user)

    const searchUser =await UserModel.findById(postmanid);
    if(!searchUser){
        return res.status(401).json({
            success: false,
            message: 'Created user Not Found Maybe Your Account Is Deleted Or Blocked',
        })
}



const username= searchUser.username
// const usernamepost=searchUser.post
// const usernameimg=searchUser.img

// name=username
console.log(username)

    try {
        const blog =await BlogModel.create({id,  heading, p,text,italic,imageUrl,isImageRight,img,name:username,post,detail});
if(!blog){
    res.status(401).json({
        success: false,
        message: 'something went wrong',
    })
}

res.status(201).json({
    success: true,
    message: 'blog created',
    blog
})
    } catch (error) {
       res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.message, 
    })
}

}


export const getAllBlog = async (req, res) => {
    try {
        const blog = await BlogModel.find().select('imageUrl heading p img name post');
        console.log(blog)

    if(!blog){
        return res.status(404).json({
            success: false,
            message: 'Failed To Load Blog',
        });
    }

        res.status(200).json(blog)
        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        })
    }
}


export const getBlog = async (req, res) => {
    const {id} = req.params;
    try {
        const blog =await BlogModel.findById(id);
        if(!blog){
            return res.status(404).json({
                success: false,
                message: 'blog not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'blog found',
            blog
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        })
    }
}

export  const updateBlog = async (req, res) => {
    const {id} = req.params;
    const {heading, p,text,italic,imageUrl,isImageRight,img,name,post,detail} = req.body;
    try {
        const blog =await BlogModel.findByIdAndUpdate(id, {heading, p,text,italic,imageUrl,isImageRight,img,name,post,detail}, {new: true});
        if(!blog){
            return res.status(404).json({
                success: false,
                message: 'blog not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'blog updated',
            blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,   })}
}



export const deleteBlog = async (req, res) => {
    const {id} = req.params;
    try {
        const found =await BlogModel.findByIdAndDelete(id);
        if (!found) {
            return res.status(404).json({
                success: false,
                message: 'Blog Does Not Exist',
            });
        }
        res.status(200).json({
            success: true,
            message: 'blog deleted',
            found
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        })
    }
}


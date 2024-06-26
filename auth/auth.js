import jwt from "jsonwebtoken";
import {UserModel} from '../models/user.js';

export const auth = (req, res, next) => {
    if (!req.cookies.token) {
        return res.status(401).json({
            success: false,
            message: 'Please Login First Thats Auth MiddleWare',
        });
    }
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
        req.user = decoded; 
        next(); 
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'invalid token',
        });
    }
}


// this will filter if admin is on then he can do this only
export const adminAccess = async(req, res, next) => {

    const user = req.user
const userfound = await UserModel.findById(user._id);
    if (!userfound.isAdmin) {
        return res.status(401).json({
            success: false,
            message: 'You Do Not Have Access To Write To This Page',
            // userfound
        }); 
    } 
    try {
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        });
    }
}

export const subAdminAccess = async(req, res, next) => {

    const user = req.user
const userfound = await UserModel.findById(user._id);
    if (!userfound.isSubAdmin) {
        return res.status(401).json({
            success: false,
            message: 'Only Admin Or SubAdmin Can Access This Page',
            // userfound
        }); 
    } 
    try {
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        });
    }
}

export const employeeAccess = async(req, res, next) => {

    const user = req.user
const userfound = await UserModel.findById(user._id);
    if (!userfound.isEmployee) {
        return res.status(401).json({
            success: false,
            message: 'You Do Not Have Access To Write To This Page',
            // userfound
        }); 
    } 
    try {
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        });
    }
}


// getting own profile

export const profileAccess = async(req, res, next) => {

    const user = req.user
const userfound = await UserModel.findById(user._id);
    if (!userfound.isEmployee) {
        return res.status(401).json({
            success: false,
            message: 'You Do Not Have Access To Write To This Page',
            // userfound
        }); 
    } 
    try {
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        });
    }
}
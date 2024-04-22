import jwt from "jsonwebtoken";
import {UserModel} from '../models/user.js';

export const auth = (req, res, next) => {
    if (!req.cookies.token) {
        return res.status(401).json({
            success: false,
            message: 'unauthorized access',
        });
    }
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
        // console.log(decoded);
        req.user = decoded; 
        // const user=;

        
        next(); 
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'invalid token',
        });
    }
}

export const Access = async(req, res, next) => {

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

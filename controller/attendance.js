
import { attendanceModel } from "../models/attendance.js";
import {UserModel} from '../models/user.js';


  export const attendance = async (req, res) => {
    const {checkInTime, checkOutTime, officeTime, currentDay, currentDate} = req.body;    
    const userId = await req.user._id
    // console.log(userId)
const user =await UserModel.findById(userId);
const userName=user.name
const user_Id=user._id
    try {
        const attendance = await attendanceModel.create({checkInTime, checkOutTime, officeTime, currentDay, currentDate,userName,user_Id});
    console.log(req.body);
    res.status(200).json({
        success: true,
        message: 'attendance created',
        attendance
    })  
    } catch (error) {
        res.status( 500).json({
            success: false,
            message: 'something went wrong',
        })
    }
  } 

  export const getAttendance = async (req, res) => {
    
    try {
        const attendance = await attendanceModel.find();
        res.status(200).json(attendance)
        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        })
    }}

    export const getSingleAttendance = async (req, res) => {
        const {id} = req.params;
        try {
            const attendance =await attendanceModel.findById(id);
            if(!attendance){
                return res.status(404).json({
                    success: false,
                    message: 'attendance not found',
                });
            }
            res.status(200).json({
                success: true,
                message: 'attendance found',
                attendance
        })} catch (error) {
            res.status(500).json({
                success: false,
                message: 'something went wrong',
                error: error.message,
            })
        }
    }

    // here we will only update the time or name etc 
    export const updateAttendance = async (req, res) => {
        const {checkInTime, checkOutTime, officeTime, currentDay, currentDate} = req.body;
        const {id} = req.params;
        try {
            const foundedAndUpdated =await attendanceModel.findByIdAndUpdate( id ,{checkInTime, checkOutTime, officeTime, currentDay, currentDate}, {new: true});
            if (!foundedAndUpdated) {
                return res.status(404).json({
                    success: false,
                    message: 'attendance not found',
                });
            }
            res.status(200).json({
                success: true,
                message: 'attendance updated',
                foundedAndUpdated
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'something went wrong',
                error: error.message,   });
    }}

// updated attendance and sending to the user object
export const updateAttendanceAndDelete = async (req, res) => {
    const {checkInTime, checkOutTime, officeTime, currentDay, currentDate} = req.body;
    const {id} = req.params;
    try {
        const foundedAndUpdated =await attendanceModel.findByIdAndUpdate( id ,{checkInTime, checkOutTime, officeTime, currentDay, currentDate}, {new: true});
        if (!foundedAndUpdated) {
            return res.status(404).json({
                success: false,
                message: 'attendance not found',
            });
        }
        // if foundedAndUpdated
            const user =await UserModel.findById('662b99225d50b7ef6b531958'
                // foundedAndUpdated.user_Id
                );
            user.attendance.push(foundedAndUpdated)
            user.save()

       const deleted =await attendanceModel.findByIdAndDelete(id)
        
        res.status(200).json({
            success: true,
            message: 'Attendance updated And Deleted',
            deleted
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,   });
}}

    export const deleteAttendance = async (req, res) => {
        const {id} = req.params;
        try {
            const found =await attendanceModel.findByIdAndDelete(id);
            if (!found) {
                return res.status(404).json({
                    success: false,
                    message: 'attendance not found',
                });
            }
            res.status(200).json({
                success: true,
                message: 'attendance deleted',
                found
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'something went wrong',
                error: error.message,
            })          
            }}
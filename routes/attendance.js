import express from 'express';
import { attendance, deleteAttendance, firstAttendance, getAllFirstAttendance, getAttendance, getSingleAttendance, updateAttendance, updateAttendanceAndDelete } from '../controller/attendance.js';
import { auth } from '../auth/auth.js';

const attendanceRouter=express.Router();

attendanceRouter.post('/firstattendance/',auth,firstAttendance);
attendanceRouter.get('/getfirstattendance/',auth,getAllFirstAttendance);
attendanceRouter.post('/attendance/' ,auth,attendance);
attendanceRouter.get('/attendance/all/',getAttendance);
attendanceRouter.get('/attendance/single/:id',getSingleAttendance);
attendanceRouter.patch('/attendance/update/:id',updateAttendance);
attendanceRouter.delete('/attendance/delete/:id',deleteAttendance);
attendanceRouter.post('/attendance/updateanddelete/:id',updateAttendanceAndDelete);






export default attendanceRouter
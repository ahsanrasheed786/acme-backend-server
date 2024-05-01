import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    checkInTime: { type: String, default: 0 },
    checkOutTime: { type: String, default: 0 },
    officeTime: { type: String, default: 0 },
    currentDay: { type: String, default: 0 },
    userName: { type: String,  },
    user_Id: { type: String, },

})

export const  attendanceModel = mongoose.model('Attendance', attendanceSchema);


const firstAttendanceSchema = new mongoose.Schema({
    checkInTime: { type: String, default: 0 },
    userName: { type: String,  },
})

export const  firstAttendanceModel = mongoose.model('FirstAttendance', firstAttendanceSchema);
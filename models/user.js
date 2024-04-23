import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    post: { type: String, required: true },
    image: { type: String, required: true },
    isAdmin: { type: Boolean, default: false},
    isSubAdmin: { type: Boolean, default: false},
    attendance: [
        {
          onTime: { type: String, default: 0 },
          offTime: { type: String, default: 0 }
        }
      ],
    JoiningDate: { type: Date, default: Date.now },
});
// userSchema.virtual('JoiningDate').get(function() {
//     return moment(this.JoiningDate).tz('Asia/Karachi').format('YYYY-MM-DD HH:mm:ss');
// });
export const UserModel = mongoose.model('User', userSchema);

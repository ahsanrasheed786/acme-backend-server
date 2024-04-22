import mongoose from "mongoose";


    const contactUsSchema  = new mongoose.Schema({
        firstname: {type:String,required:true},
        lastname: {type:String,required:true},
        phone: {type:Number,required:true},
        email: {type:String,required:true},
        company: {type:String,required:true},
        message: {type:String,required:true},
        // createdAt: {type:Date,required:true}
        isFinite: {type:Boolean,default:false}
    })

    export const contactModel = mongoose.model('contactUs',contactUsSchema)
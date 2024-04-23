import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    id: { type: Number },
    heading: { type: String },
    p: { type: String },
    text: { type: String },
    italic: { type: String },
    imageUrl: { type: String },
    isImageRight: { type: Boolean },
    img: { type: String },
    name: { type: String },
    post: { type: String },
    detail: [{ heading: String, text: String }],
    createdBy: { type: Number}
});


export const BlogModel = mongoose.model('Blog', blogSchema);
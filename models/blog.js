import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    heading: { type: String, required: true },
    p: { type: String, required: true },
    text: { type: String, required: true },
    italic: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isImageRight: { type: Boolean, required: true },
    img: { type: String },
    name: { type: String },
    post: { type: String },
    detail: [{ heading: String, text: String }],
    createdBy: { type: Number}
});

export const BlogModel = mongoose.model('Blog', blogSchema);
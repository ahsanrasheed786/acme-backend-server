import express from 'express';
import { createBlog, deleteBlog, getAllBlog, getBlog, updateBlog } from '../controller/blog.js';
const blogRouter = express.Router();
import { auth, Access } from '../auth/auth.js';



blogRouter.post('/createblog', auth, Access, createBlog);
blogRouter.get('/getallblogs', getAllBlog);
blogRouter.get('/getblog/:id', getBlog);

blogRouter.patch('/updateblog/:id', updateBlog).delete('/deleteblog/:id', deleteBlog);



export default blogRouter
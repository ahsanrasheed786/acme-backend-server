import express from 'express';
import { createBlog, deleteBlog, getAllBlog, getBlog, updateBlog } from '../controller/blog.js';
const blogRouter = express.Router();
import { auth, adminAccess, subAdminAccess ,employeeAccess } from '../auth/auth.js';



blogRouter.post('/createblog', auth, subAdminAccess, createBlog);
blogRouter.get('/getallblogs',auth, employeeAccess, getAllBlog);
blogRouter.get('/getblog/:id',auth,employeeAccess, getBlog);

blogRouter.patch('/updateblog/:id',auth,adminAccess, updateBlog).delete('/deleteblog/:id',auth,adminAccess, deleteBlog);



export default blogRouter
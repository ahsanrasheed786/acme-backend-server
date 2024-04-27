import express from 'express';
import { login ,signup ,logout ,getallUser , updateUser ,deleteUser, getUser} from '../controller/user.js';
import { auth, adminAccess, subAdminAccess, employeeAccess } from '../auth/auth.js';


const router = express.Router();

// http://localhost:8000/api/user/register
router.post('/login',login );

// http://localhost:8000/api/user/login
router.post('/register',auth, adminAccess, signup );

// http://localhost:8000/api/user/logout
router.get('/logout',auth, logout );



router.get('/alluser' , auth, getallUser );
router.get('/getuser/:id' , auth, getUser);


// auth, Access,
// auth, Access,

router.patch('/updateUser/:id' ,auth,adminAccess , updateUser);  
// router.post('/attendance/:id' ,  markAttendance); 

router.delete('/deleteUser/:id',auth, adminAccess ,deleteUser);  









export default router;
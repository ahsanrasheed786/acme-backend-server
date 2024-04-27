import express from 'express';
import { login ,signup ,logout ,getallUser , updateUser ,deleteUser, getUser} from '../controller/user.js';
import { auth, adminAccess } from '../auth/auth.js';


const router = express.Router();

// http://localhost:8000/api/user/register
router.post('/login',login );

// http://localhost:8000/api/user/login
router.post('/register', signup );

// http://localhost:8000/api/user/logout
router.get('/logout', logout );



router.get('/alluser' ,  getallUser );
router.get('/getuser/:id' ,  getUser);


// auth, Access,
// auth, Access,

router.patch('/updateUser/:id' , updateUser);  
// router.post('/attendance/:id' ,  markAttendance); 

router.delete('/deleteUser/:id', deleteUser);  









export default router;
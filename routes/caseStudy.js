import express from 'express';
import { AddCaseStudy, deleteCaseStudy, getCaseStudy, getSingleCaseStudy, updateCaseStudy } from '../controller/caseStudy.js';
import { auth, adminAccess, subAdminAccess, employeeAccess } from '../auth/auth.js';


const caseStudyRouter = express.Router();

caseStudyRouter.post('/create',auth , subAdminAccess,  AddCaseStudy )
caseStudyRouter.patch('/update/:id',auth , subAdminAccess, updateCaseStudy )
caseStudyRouter.get('/get',auth , getCaseStudy )
caseStudyRouter.get('/get/:id',auth , getSingleCaseStudy )
caseStudyRouter.delete('/get/:id',auth ,adminAccess,  deleteCaseStudy   )

// getCaseStudyById
// deleteCaseStudy



export default caseStudyRouter
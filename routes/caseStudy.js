import express from 'express';
import { AddCaseStudy, deleteCaseStudy, getCaseStudy, getSingleCaseStudy, updateCaseStudy } from '../controller/caseStudy.js';


const caseStudyRouter = express.Router();

caseStudyRouter.post('/create',AddCaseStudy )
caseStudyRouter.patch('/update/:id',updateCaseStudy )
caseStudyRouter.get('/get',getCaseStudy )
caseStudyRouter.get('/get/:id',getSingleCaseStudy )
caseStudyRouter.delete('/get/:id',deleteCaseStudy   )

// getCaseStudyById
// deleteCaseStudy



export default caseStudyRouter
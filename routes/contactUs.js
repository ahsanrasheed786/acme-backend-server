import express from 'express';
const contactRouter = express.Router();
import { deleteContact, getContacts, getContact, postContact, updateContact } from '../controller/contactUs.js';
import { auth, adminAccess, subAdminAccess, employeeAccess } from '../auth/auth.js';


contactRouter.post('/post', auth, adminAccess, postContact);
contactRouter.get('/getcontacts', auth, adminAccess, getContacts);
contactRouter.get('/getcontact/:id', auth, adminAccess, getContact);

// getOneContact
contactRouter.patch('/getcontact/:id', auth, adminAccess,updateContact).delete('/getcontact/:id',auth, adminAccess, deleteContact);




export default contactRouter
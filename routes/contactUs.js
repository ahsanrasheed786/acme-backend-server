import express from 'express';
const contactRouter = express.Router();
import { deleteContact, getContacts, getContact, postContact, updateContact } from '../controller/contactUs.js';


contactRouter.post('/post', postContact);
contactRouter.get('/getcontacts', getContacts);
contactRouter.get('/getcontact/:id', getContact);

// getOneContact
contactRouter.patch('/getcontact/:id', updateContact).delete('/getcontact/:id', deleteContact);




export default contactRouter
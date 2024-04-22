import { contactModel } from '../models/contactUs.js';


export const postContact=async (req, res) => {
    const {firstname,lastname,phone, email, company, message} = req.body;
    const contact = await contactModel.create({firstname,lastname,phone, email, company, message});
    res.status(200).json({
        success: true,
        message: 'contact created',
        contact
    })
}

export const getContacts=async (req, res) => {
    try {
        const contact = await contactModel.find();
        res.status(200).json(contact)
        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        })
    }
   
}

export const getContact=async (req, res) => {
    const {id} = req.params;
    try {
        const contact = await contactModel.findById(id);
        if(!contact){
            return res.status(404).json({
                success: false,
                message: 'contact not found',
            });
        }
        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        })
    }
}

export const updateContact=async (req, res) => {
    const {id} = req.params;
    const {isFinite} = req.body;
    const contact = await contactModel.findByIdAndUpdate(id, {isFinite}, {new: true});
    res.status(200).json({
        success: true,
        message: 'contact updated',
        contact
    })
}
export const deleteContact=async (req, res) => {
    const {id} = req.params;
    try {
        const found =await contactModel.findByIdAndDelete(id);
        if (!found) {
            return res.status(404).json({
                success: false,
                message: 'contact not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'contact deleted',
            found
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message,
        })}
    }
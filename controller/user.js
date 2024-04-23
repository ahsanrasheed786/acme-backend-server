import {UserModel} from '../models/user.js';
import { generateAccessToken }  from '../feature/gernatingToken.js';
export const  login = async(req, res) => {
const {username, password} = req.body;

try {
    const userfound = await UserModel.findOne({username});
    if(!userfound){
       
            return res.status(401).json({
                success: false,
                message: 'User Not Found',
            });
        }
    if(userfound.password !== password){
        
            return res.status(401).json({
                success: false,
                message: 'Wrong Password',
            });
        }
   
        const  token = await generateAccessToken(userfound.username , userfound._id);

        res.status(200) 
         .cookie("token" ,token, {
                maxAge: 1800000, 
                // httpOnly: true, 
                // secure: true, 
                // sameSite: 'strict', 
            }).json({
            success: true,
            message: `Welcome Back ${userfound.username}`,
            // token
            // userfound
        });
  
    
} catch (error) {
    res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.message,
    })
    
}}

export const signup = async (req, res) => {
   try {
    
   const {name,username,phone, password,email,post,image,isAdmin} = req.body;
   const user = await UserModel.create({name,username,phone,password,email, post,image, isAdmin});

   if (user) {
return  res.status(201).json({
    success: true,
    message: 'user created', 
    user   
})}
  
   } 
   catch (error) {
    res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.message,
   });
   }
}

export const logout = (req, res) => {
    res.status(200).clearCookie('token').json({
        success: true,
        message: 'user logged out',
    }); 
}

export const getallUser = async (req, res) => {
     const alluser = await UserModel.find();
    //  console.log(req.user);
    
     res.status(200).json(alluser);
}

export const getUser = async (req, res) => {
    const { id } = req.params;
    let user;
    try {
      user = await UserModel.findById(id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'user not found',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'user found',
        user,
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'User Not Found',
        
      });
    }
  };

export const updateUser=async (req, res) => {
    try {
        const {id} = req.params;
    let {name,username,phone, password,email,post,image,isAdmin, isSubAdmin} = req.body;

    isAdmin? isSubAdmin= true : isSubAdmin = isSubAdmin
    const user = await UserModel.findByIdAndUpdate(id, {name,username,phone, password,email,post,image,isAdmin,isSubAdmin}, {new: true});
    res.status(200).json({
        success: true,
        message: `${user.name} Updated`,
        user
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error,
        })
    }
    
}





export const deleteUser = async (req, res) => {
    const {id} = req.params;
    console.log(id)
try {
    const {id} = req.params;
    const notfound =await UserModel.findByIdAndDelete(id);
    if (!notfound) {
        return res.status(404).json({
            success: false,
            message: 'user not found',
        });
    }
    res.status(200).json({
        success: true,
        message: `${notfound.name} Delete`,
    });
} catch (error) {
    res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.message,
    })
}

  
}
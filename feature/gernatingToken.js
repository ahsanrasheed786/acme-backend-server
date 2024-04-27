import jwt from "jsonwebtoken";

export const generateAccessToken =async (username ,_id) => {
    try {
        // process.env.TOKEN_SECRET ||
        const token = await jwt.sign({username ,_id},   process.env.TOKEN_SECRET , {
            expiresIn: '1d',
        });
        return token;
    } catch (error) {
        console.error('Error generating token:', error.message);
        throw error;
    }
};


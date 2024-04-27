import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/user.js";
import contactRouter from "./routes/contactUs.js";
import blogRouter from "./routes/blog.js";
import cookieParser from "cookie-parser";
import caseStudyRouter from "./routes/caseStudy.js";
import attendanceRouter from "./routes/attendance.js";
// import morgan from "morgan";
dotenv.config();
const app = express();

// app.use(cors({
//     origin: 'http://localhost:5173', 
//     credentials: true 
// }));
app.use(cors({
    origin: process.env.FRONTEND_URL, 
    methods: ['GET', 'POST', 'PATCH','PUT', 'DELETE'],
    credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(morgan('dev'));

app.use("/api/user",router)
app.use("/api/contactus",contactRouter)
app.use("/api/blog",blogRouter)
app.use("/api/casestudy",caseStudyRouter)
app.use("/api/",attendanceRouter)

const mongoURL = process.env.MONGOURL ;
const DbName=process.env.DATABASE
    async function connectToMongoDB(url,dbName) {
        try {
            const client = await mongoose.connect(url, {dbName });
            console.log(`Connected to MongoDB database: ${client.connection.db.databaseName} claster-Name: ${client.connection.host}`);
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }
    connectToMongoDB(mongoURL,DbName);
// Starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} mode.`));


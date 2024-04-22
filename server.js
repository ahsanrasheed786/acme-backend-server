import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/user.js";
import contactRouter from "./routes/contactUs.js";
import blogRouter from "./routes/blog.js";

import cookieParser from "cookie-parser";
import caseStudyRouter from "./routes/caseStudy.js";
// import morgan from "morgan";
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(morgan('dev'));

app.use("/api/user",router)
app.use("/api/contactus",contactRouter)
app.use("/api/blog",blogRouter)
app.use("/api/casestudy",caseStudyRouter)


// MongoDB Connection
const mongoURL = process.env.MONGOURL ;
// { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(mongoURL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

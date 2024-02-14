import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/index.js';

 
const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/v1',router)

mongoose.connect(process.env.MONGOURI).then(()=>console.log("database connected"))

app.listen(8000,()=>console.log("app is running on port 8000"))
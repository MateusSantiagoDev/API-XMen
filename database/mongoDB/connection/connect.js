import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();


export class dataBaseConnect{
    async connection(){
        await mongoose.connect(process.env.DATABASE_URL);
    }
}
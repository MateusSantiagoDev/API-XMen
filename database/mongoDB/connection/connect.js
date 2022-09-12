import mongoose from "mongoose";

export class dataBaseConnect{
    async connection(){
        await mongoose.connect(process.env.DATABASE_URL);
    }
}
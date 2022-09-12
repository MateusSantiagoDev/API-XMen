import mongoose from "mongoose";
/* import { config } from "dotenv";

if(process.env.NOD_ENV !== "productin"){
    config();
} */

export class dataBaseConnect{
    async connection(){
        await mongoose.connect(process.env.DATABASE_URL);
    }
}
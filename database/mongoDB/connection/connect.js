import { connect } from "mongoose";
import { config } from "dotenv";

if(process.env.NOD_ENV !== "productin"){
    config();
}

export class dataBaseConnect{
    async connection(){
        await connect(process.env.DATABASE_URL);
    }
}
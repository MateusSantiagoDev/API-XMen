import mongoose from "mongoose";

export class dataBaseConnect {
  static async connection() {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

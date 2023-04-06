import { config } from "dotenv";
import { connect } from "mongoose";

config();

const DB_URI: any = process.env.DB_URI;

export async function mongoDB() {
  try {
    await connect(DB_URI);
    console.log(`MongoDB is connected successfully`);
  } catch (err: any) {
    console.log(err.message);
  }
}
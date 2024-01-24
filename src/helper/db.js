//1. import mongoose
import { User } from "@/models/users.model";
import mongoose from "mongoose";

// 2. create async function
export const connectDb = async () => {
  //3. use try and catch method to catch error if any
  try {
    // here {connection} is to get all the methods of mongoose
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("db connected....");
    // console.log(connection);
  } catch (error) {
    console.log("error_occured...");
    console.log(error);
  }
};

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/MyData");

    console.log("Backend is connected");
  } catch (error) {
    console.log("Backend is not connected");
  }
};

export default connectDb;

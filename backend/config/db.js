import mongoose from "mongoose";

const connectDb = async (uri) => {
  try {
    const db_options = {
      dbName: "ecommeceStore",
    };
    await mongoose.connect(uri, db_options);
    console.log("connect to database successfully");
  } catch (error) {
    console.log("error", error);
  }
};

export default connectDb;

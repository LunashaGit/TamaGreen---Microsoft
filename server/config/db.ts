import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.USER +
      ":" +
      process.env.PSWD +
      "@cluster0.rkohusj.mongodb.net"
  )
  .then(() => {
    console.log("⚡️[server]: Connect to MongoDB");
  })
  .catch((err) => {
    console.log("⚡️[server]: Failed to connect to MongoDB", err);
  });

import express, { Express, Request, Response } from "express";
import router from "./routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import { importData } from "./config/importDevData";

function createServer() {
  const app: Express = express();

  dotenv.config();
  const mongoDB = process.env.MONGO_DATABASE.replace(
    "<PASSWORD>",
    process.env.MONGO_PASSWORD
  );

  mongoose.connect(mongoDB, {}).then((con) => {
    console.log("julia mongo db is running");
    //console.log('connection',con.connection);
    //importData();
  });
  app.use(express.json());
  app.use("/api/v1/", router);

  return app;
}

export default createServer;

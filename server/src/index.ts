import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import app from './app';

dotenv.config();
const port = 8080;
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

const mongoDB = process.env.MONGO_DATABASE.replace(
  "<PASSWORD>",
  process.env.MONGO_PASSWORD
);
mongoose.connect(mongoDB, {}).then((con) => {
  console.log("mongo db is connected");
  //importData();
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

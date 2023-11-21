import cors from 'cors';
import createServer from './app';

import dotenv from 'dotenv';

const port = 8080;
export const app = createServer();
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
dotenv.config();
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

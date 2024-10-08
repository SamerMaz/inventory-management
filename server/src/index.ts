import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan'

/** ROUTE IMPORTS */

/**CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());


/** Routes*/
app.get("/hello", (req:Request,res:Response)=>{
  res.send("hello world")
});

/** SERVER */
const port = process.env.PORT ||  3001;
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
})
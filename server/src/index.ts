
import express, { Application, json } from "express";
import cors from "cors";
import { config } from "dotenv";
import pathResolve from '@utils/pathResolve'
import authRouter from "@routes/auth.routes";

import cookieParser from 'cookie-parser'

config({
  path: pathResolve('.env')
})
const PORT = process.env.PORT || 5000;

const app: Application = express();
app.use(json());
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use('/auth', authRouter)


const start = () => {
  app.listen(PORT, () => console.log(`Server start on port - ${PORT}`));
};

start();

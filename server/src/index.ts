import express, { Application, json } from "express";
import cors from "cors";
import { config } from "dotenv";
import pathResolve from '@utils/pathResolve'
import authRouter from "@routes/auth.routes";
import cookieParser from 'cookie-parser'
import createDb from "@models/db";
import productsRouter from "@routes/products.routes";
import fileUpload from "express-fileupload";
import favoriteRouter from "@routes/favorite.routes";
import cartRouter from "@routes/cart.routes";
import commentsRouter from "@routes/comments.routes";


config({
  path: pathResolve('.env')
})
const PORT = process.env.PORT || 5000;

const app: Application = express();

app.use(json());

app.use(cookieParser())
app.use(express.static(pathResolve('../static')))
app.use(fileUpload({}))


app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use('/auth', authRouter)
app.use('/products', productsRouter)
app.use('/favorite', favoriteRouter)
app.use('/cart', cartRouter)
app.use('/comments', commentsRouter)

const start = () => {
  app.listen(PORT, () => console.log(`Server start on port - ${PORT}`));
};

const pool = createDb()

start();


export default pool 


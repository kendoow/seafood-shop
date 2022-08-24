import { createTransport } from "nodemailer";
import { config } from "dotenv";
import pathResolve from "./pathResolve";
import { IProductOrder } from "@interfaces/order.interface";

config({
  path: pathResolve(".env"),
});

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const auth = {
  user: process.env.EMAIL,
  pass: process.env.EMAIL_PASSWORD,
};

let transporter = createTransport({
  host,
  port: +(port as string),
  auth,
  secure: true,
});

const orderMessage = (
  orderId: string,
  email: string,
  totalPrice: number,
  date: string,
  products: IProductOrder[],
  address: string,
  phone: number
) => {
  transporter.sendMail({
    from: `"Seafood" <${auth.user}>`,
    to: `${auth.user}`,
    subject: `Заказ номер ${orderId} `,
    html: `<div>Заказ от ${email} на сумму ${totalPrice} был сделан в ${date}<div>
            <div>В заказ входит : ${products.map((el) => el.title)} </div>
            <div>В граммах : ${products.map((el) => `${el.gramms} гр `)} </div>
            <div>В колличестве : ${products.map(
              (el) => `${el.counter} шт `
            )}  </div>
            <div>Адресс заказчика : ${address} </div>
            <div>Телефон заказчика : ${phone} </div>
          `,
  });
};

export default orderMessage;

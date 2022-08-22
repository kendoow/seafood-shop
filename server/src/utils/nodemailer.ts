import {createTransport} from 'nodemailer'
import { config } from 'dotenv'
import pathResolve from './pathResolve'

config({
  path: pathResolve('.env')
})

const host = process.env.SMTP_HOST
const port = process.env.SMTP_PORT
const auth = {  
  user: process.env.EMAIL,
  pass: process.env.EMAIL_PASSWORD
}

let transporter = createTransport({
  host,
  port: +(port as string),
  auth,
  secure: true,
})

const orderMessage = (orderId:string, email:string, totalPrice:number,date:string) => {

        transporter.sendMail({
        from: `"Seafood" <${auth.user}>`,
        to: `${auth.user}`,
        subject: `Заказ номер ${orderId} `,
        html:
          `<div>Заказ от ${email} на сумму ${totalPrice} был сделан в ${date}<div>`,
      })
} 

export default orderMessage;



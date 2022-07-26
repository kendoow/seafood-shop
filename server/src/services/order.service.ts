import { IOrder, IProductOrder } from "./../interfaces/order.interface";
import pool from "index";
import authService from "@services/auth.service";
import { addFieldCounterOrder } from "@utils/addFieldCounter";
import generateDate, { deviveryDate } from "@utils/generateDate";
import orderMessage from "@utils/nodemailer";

class OrderService {

  async getOne(refreshToken: string, orderId: number) {
    try {
      const user = await authService.check(refreshToken);
      const order = await pool.query<IOrder>(
        "SELECT * FROM order_table \n\
            WHERE user_id = $1 and id = $2",
        [user.id, orderId]
      );
      const orderObject = order.rows[0];
        
      if (Object.keys(orderObject).length) {
        const orderIdArray = orderObject.products.map((product) => product.id);
        const orderProducts = await pool.query(`SELECT * FROM products \n\
                WHERE id IN (${orderIdArray})`);

        return addFieldCounterOrder(orderProducts.rows, orderObject);
      }

      return [];
    } catch (e) {
      throw e;
    }
  }

  async getLast(refreshToken: string){
    try {
      const user = await authService.check(refreshToken);
      const order = await pool.query<IOrder>(
        "SELECT * FROM order_table WHERE user_id = $1 and id=(SELECT max(id) FROM order_table)",
        [user.id]
      );
      const orderObject = order.rows[0];

      if (Object.keys(orderObject).length) {
        const orderIdArray = orderObject.products.map((product) => product.id);
        const orderProducts = await pool.query(`SELECT * FROM products \n\
                WHERE id IN (${orderIdArray})`);

        return {products:addFieldCounterOrder(orderProducts.rows, orderObject), date:orderObject.date,delivery_date:orderObject.delivery_date, totalPrice:orderObject.total_price, id:orderObject.id};
      }

      return [];
    } catch (e) {
      throw e;
    }
  }

  async create(refreshToken: string, totalPrice: number) {
    try {
      const user = await authService.check(refreshToken);
      const userId = user.id;
      const date = generateDate();
      const delivertDate = deviveryDate()
      const cart = await pool.query("SELECT * FROM cart where user_id = $1", [
        userId,
      ]);

      const products = cart.rows.map((product) => {
        delete product.user_id;
        delete product.id;
        return {
          id: product.product_id,
          counter: product.counter,
        };
      });

      const orderCreated = await pool.query(
        "INSERT INTO order_table (user_id, date,delivery_date, products, total_price) \n\
            VALUES ($1, $2, $3, $4,$5) RETURNING *",
        [userId, date,delivertDate, JSON.stringify(products), totalPrice]
      );
      this.sendEmailOrder(refreshToken);
      return orderCreated.rows;
    } catch (e) {
      throw e;
    }
  }

  async deleteAll(refreshToken: string) {
    try {
      const user = await authService.check(refreshToken);
      await pool.query(
        "DELETE FROM order_table where user_id = $1 RETURNING *",
        [user.id]
      );
    } catch (e) {
      throw e;
    }
  }

  async deleteOne(refreshToken: string, productId: number) {
    try {
      const user = await authService.check(refreshToken);
      const deletedOrder = await pool.query(
        "DELETE FROM order_table where user_id = $1 and product_id = $2 RETURNING *",
        [user.id, productId]
      );
      return deletedOrder.rows[0];
    } catch (e) {
      throw e;
    }
  }

  async sendEmailOrder(refreshToken: string) {
    try {
      const user = await authService.check(refreshToken);

      const orderId = await pool.query("SELECT id from order_table");
      const email = await pool.query(
        "SELECT email from user_account where id = $1",
        [user.id]
      );
      const date = await pool.query(
        "SELECT date from order_table where user_id = $1",
        [user.id]
      );
      const totalPrice = await pool.query(
        "SELECT total_price from order_table where user_id = $1",
        [user.id]
      );
      const products = await this.getOne(
        refreshToken,
        orderId.rows.slice(-1)[0].id
      );
      const address = await pool.query(
        "SELECT address from user_account where id = $1",
        [user.id]
      );
      const phone = await pool.query(
        "SELECT phone from user_account where id = $1",
        [user.id]
      );

      return orderMessage(
        orderId.rows[orderId.rows.length - 1].id,
        email.rows[0].email,
        totalPrice.rows[totalPrice.rows.length - 1].total_price,
        date.rows[date.rows.length - 1].date,
        products as IProductOrder[],
        address.rows[address.rows.length - 1].address,
        phone.rows[phone.rows.length - 1].phone
      );
    } catch (e) {
      
      throw e;
    }
  }
}

export default new OrderService();

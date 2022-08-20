import { Pool } from "pg";

const OrderSchema = (pool: Pool) => {
  pool.query('create TABLE if not exists order_table(\n\
    id SERIAL PRIMARY KEY,\n\
    counter INTEGER NOT NULL,\n\
    user_id INTEGER NOT NULL,\n\
    FOREIGN KEY(user_id) REFERENCES user_account(id),\n\
    product_id INTEGER NOT NULL,\n\
    FOREIGN KEY(product_id) REFERENCES products(id)\n\
    )'
  );
};

export default OrderSchema;

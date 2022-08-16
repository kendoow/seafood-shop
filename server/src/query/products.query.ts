import { Pool } from "pg";

const ProductsSchema = (pool: Pool) => {
  pool.query('create TABLE if not exists products(\n\
    id SERIAL PRIMARY KEY,\n\
    img VARCHAR(255),\n\
    title VARCHAR(255),\n\
    price INT NOT NULL,\n\
    gramms INT NOT NULL\n\
    )'
  );
};

export default ProductsSchema;

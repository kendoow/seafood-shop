import { Pool } from "pg";

const ProsuctsSchema = (pool: Pool) => {
  pool.query('create TABLE if not exists products(\n\
    id SERIAL PRIMARY KEY,\n\
    img VARCHAR(255),\n\
    title VARCHAR(255),\n\
    price VARCHAR(255),\n\
    weight VARCHAR(255)\n\
    )'
  );
};

export default ProsuctsSchema;

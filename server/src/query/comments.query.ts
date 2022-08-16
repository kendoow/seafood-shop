import { Pool } from "pg";

const CommentsSchema = (pool: Pool) => {
  pool.query(
    "create TABLE if not exists comments(\n\
    id SERIAL PRIMARY KEY,\n\
    img VARCHAR(255),\n\
    title VARCHAR(255),\n\
    description VARCHAR(255)\n\
    )"
  );
};

export default CommentsSchema;

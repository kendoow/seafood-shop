import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "passwordzx",
  host: "localhost",
  port: 5432,
  database: "Seafood",
});

export default pool;
import { Pool } from "pg";
import initialTables from "query";

const createDb = () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const database = process.env.DATABASE;

  if (!user || !password || !host || !port || !database) {
    throw new Error("connection Error");
  }
  const pool = new Pool({
    user,
    password,
    host,
    port: +port,
    database,
  });
  initialTables(pool)
  return pool
};

export default createDb;

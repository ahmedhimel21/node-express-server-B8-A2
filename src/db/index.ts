import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
  connectionString: config.db_uri,
});

export const initDB = async () => {
  try {
    await pool.query(``);
    console.log("Database is connected successfully!");
  } catch (error) {
    console.log(error);
  }
};

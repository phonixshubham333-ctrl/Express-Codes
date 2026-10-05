import mysql2 from "mysql2/promise";
import { dbConfig } from "../config/databaseConfig.v1.js";
const db = mysql2.createPool({
    host: dbConfig.development.host,
    user: dbConfig.development.username,
    password: dbConfig.development.password,
    database: dbConfig.development.database,
});
console.log("Database Created Successfully ");
export default db;
//# sourceMappingURL=db.js.map
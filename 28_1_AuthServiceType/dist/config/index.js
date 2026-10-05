import dotenv from "dotenv";
dotenv.config();
export const ConfigPORT = {
    PORT: Number(process.env.PORT) || 3002,
};
export const DataBaseConfig = {
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "password",
    DB_NAME: process.env.DB_NAME || "mydatabase",
};
//# sourceMappingURL=index.js.map
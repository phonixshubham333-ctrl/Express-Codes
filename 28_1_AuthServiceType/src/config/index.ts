import dotenv from "dotenv";

dotenv.config();

type ConfigPORT = {
  PORT: Number;
};

type DBConfig = {
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
};

export const ConfigPORT: ConfigPORT = {
  PORT: Number(process.env.PORT) || 3002,
};

export const DataBaseConfig: DBConfig = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "password",
  DB_NAME: process.env.DB_NAME || "mydatabase",
};

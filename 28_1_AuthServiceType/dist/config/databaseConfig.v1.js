import { DataBaseConfig } from "./index.js";
export const dbConfig = {
    development: {
        host: DataBaseConfig.DB_HOST,
        username: DataBaseConfig.DB_USER,
        password: DataBaseConfig.DB_PASSWORD,
        database: DataBaseConfig.DB_NAME,
        dialect: "mysql",
    },
    //   production: {
    //     host: DataBaseConfig.DB_HOST,
    //     username: DataBaseConfig.DB_USER,
    //     password: DataBaseConfig.DB_PASSWORD,
    //     database: DataBaseConfig.DB_NAME,
    //     dialect: "mysql",
    //   },test:{
    //     host: DataBaseConfig.DB_HOST,
    //     username: DataBaseConfig.DB_USER,
    //     password: DataBaseConfig.DB_PASSWORD,
    //     database: DataBaseConfig.DB_NAME,
    //     dialect: "mysql",
    //   }
};
//# sourceMappingURL=databaseConfig.v1.js.map
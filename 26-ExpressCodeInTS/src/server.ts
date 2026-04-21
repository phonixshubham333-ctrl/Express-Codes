import express from "express";
import { serverConfig } from "./config/index.js";
import { pingHandler } from "./controllers/ping.controller.js";
import pingRouter from "./routers/ping.routers.js";


const app = express();

app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`I am listening from the PORT ${serverConfig.PORT}`)
})
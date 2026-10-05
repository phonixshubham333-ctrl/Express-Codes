import express, { type Request, type Response } from "express";
import { ConfigPORT } from "./config/index.js";
import authRouter from "./Routes/v1/v1.router.auth.js";
import { db_initialize } from "./models/schema/v1.schema.js";

try {
  await db_initialize();
} catch (error) {
  console.log("failed to connect with the Database");
}

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.listen(ConfigPORT.PORT, () => {
  console.log(`Server is running on PORT ${ConfigPORT.PORT}`);
});

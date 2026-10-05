import express from "express";
import { handelPingController } from "../../controllers/pingcontroller.js";
import { SignupHanlder } from "../../controllers/v1.signupcontroller.js";
const authRouter = express.Router();
authRouter.get("/v1", handelPingController);
authRouter.post("/v1/signup", SignupHanlder);
export default authRouter;
//# sourceMappingURL=v1.router.auth.js.map
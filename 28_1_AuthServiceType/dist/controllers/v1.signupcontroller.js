import { validateSignUpDetails } from "../service/v1.signup.service.js";
import db from "../models/db.js";
export async function SignupHanlder(req, res, next) {
    console.log("the User will send the request to the Controller");
    try {
        const signUpResult = await validateSignUpDetails(req.body);
        res.status(200).json({
            message: "Sign-up details validated successfully",
            data: signUpResult,
            success: true,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error occurred while validating sign-up details",
            success: false,
        });
    }
}
//# sourceMappingURL=v1.signupcontroller.js.map
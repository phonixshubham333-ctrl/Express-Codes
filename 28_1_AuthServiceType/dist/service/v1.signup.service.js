import db from "../models/db.js";
import { insertDataSignUp } from "../models/queries/v1.signup.js";
export async function validateSignUpDetails(signUpDetails) {
    ``;
    const { username, password } = signUpDetails;
    console.log("the User will send the request to the Service");
    console.log(username, password);
    try {
        await insertDataSignUp(db, signUpDetails);
    }
    catch (error) {
        console.error("Error validating sign-up details:", error);
        throw error;
    }
}
//# sourceMappingURL=v1.signup.service.js.map
import type { SignUpDetails } from "../../dtos/signup.dto.js";

export async function insertDataSignUp(
  db: any,
  signUpData: SignUpDetails,
): Promise<void> {
  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  const values = [signUpData.username, signUpData.password];
  try {
    await db.execute(query, values);
  } catch (error) {
    console.error("Error inserting data into users table:", error);
    throw error;
  }
}

export async function insertDataSignUp(db, signUpData) {
    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
    const values = [signUpData.username, signUpData.password];
    try {
        await db.execute(query, values);
    }
    catch (error) {
        console.error("Error inserting data into users table:", error);
        throw error;
    }
}
//# sourceMappingURL=v1.signup.js.map
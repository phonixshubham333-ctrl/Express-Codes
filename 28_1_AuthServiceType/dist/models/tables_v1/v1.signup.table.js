export async function signuptable(db) {
    await db.execute(`CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`);
    console.log("Signup Table Created Successfully");
}
//# sourceMappingURL=v1.signup.table.js.map
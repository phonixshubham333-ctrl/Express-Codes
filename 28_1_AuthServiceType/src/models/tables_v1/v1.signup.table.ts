export async function signuptable(db: any): Promise<void> {
  await db.execute(`CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`);

  console.log("Signup Table Created Successfully");
}

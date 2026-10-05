import db from "../db.js";
import { signuptable } from "../tables_v1/v1.signup.table.js";
export async function db_initialize() {
    await signuptable(db);
}
//# sourceMappingURL=v1.schema.js.map
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

// Declare a global variable to store the db instance in development
declare global {
  var _db: ReturnType<typeof drizzle> | undefined;
}

// let db: ReturnType<typeof drizzle>;

const client = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_AUTH_TOKEN!,
});
const db = drizzle(client, { schema });

// function createDatabaseClient() {
//   const client = createClient({
//     url: process.env.DB_URL!,
//     authToken: process.env.DB_AUTH_TOKEN!,
//   });
//   return drizzle(client, { schema });
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._db) {
//     global._db = createDatabaseClient();
//   }
//   db = global._db;
// } else {
//   db = createDatabaseClient();
// }

export default db;

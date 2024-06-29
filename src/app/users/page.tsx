import { users } from "@/db/schema";
import UserTable from "./_components/user-table";
import db from "@/db/drizzle";

export default async function Users() {
  const userData = await db.select().from(users);
  if (!userData.length) return <p>No users found</p>;

  return (
    <section className="p-5">
      <UserTable users={userData} />
    </section>
  );
}

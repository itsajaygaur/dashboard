import { users } from "@/db/schema";
import AddNewBtn from "./_components/add-new-btn";
// import { db } from "@/lib/firebase";
import UserTable from "./_components/user-table";
import db from "@/db/drizzle";

// const data = [
//   {
//     id: 1,
//     name: "John Doe",
//     image: "https://api.lorem.space/image/face?w=150&h=150",
//     email: "john@example.com",
//     country: "India",
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     image: "https://api.lorem.space/image/face?w=150&h=150",
//     email: "john@example.com",
//     country: "India",
//     status: "Active",
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     image: "https://api.lorem.space/image/face?w=150&h=150",
//     email: "john@example.com",
//     country: "India",
//     status: "Active",
//   },
// ];

export default async function Users() {
  const userData = await db.select().from(users);
  // const userData = await db.query.users.findMany();
  if (!userData.length) return <p>No users found</p>;

  return (
    <section className="p-5">
      <UserTable users={userData} />
    </section>
  );
}

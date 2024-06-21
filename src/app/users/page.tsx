import AddNewBtn from "./_components/add-new-btn";
import { DocumentData, collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import UserTable from "./_components/user-table";
import { User } from "@/types";

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

export default async function Leads() {
  const result = getDocs(collection(db, "users"));
  const users = (await result).docs.map((doc) => doc.data());

  return (
    <section className="p-5">
      <div className="flex justify-between gap-5 items-center mb-5">
        <h1>Leads</h1>
        <AddNewBtn />
      </div>

      <UserTable users={users} />
    </section>
  );
}

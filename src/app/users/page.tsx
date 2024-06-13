import { BsThreeDots } from "react-icons/bs";
import AddNewBtn from "./_components/add-new-btn";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

const data = [
  {
    id: 1,
    name: "John Doe",
    image: "https://api.lorem.space/image/face?w=150&h=150",
    email: "john@example.com",
    country: "India",
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    image: "https://api.lorem.space/image/face?w=150&h=150",
    email: "john@example.com",
    country: "India",
    status: "Active",
  },
  {
    id: 3,
    name: "John Doe",
    image: "https://api.lorem.space/image/face?w=150&h=150",
    email: "john@example.com",
    country: "India",
    status: "Active",
  },
];

export default async function Leads() {
  const result = getDocs(collection(db, "users"));
  const users = (await result).docs.map((doc) => doc.data());

  console.log("userss -> ", users);

  return (
    <section className="p-5">
      <div className="flex justify-between gap-5 items-center mb-5">
        <h1>Leads</h1>
        <AddNewBtn />
      </div>

      <div className="overflow-x-auto border border-base-200 rounded-lg">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>{new Date().toDateString()}</td>
                <td>
                  <button className="btn btn-ghost btn-sm">
                    <BsThreeDots />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </section>
  );
}

"use client";
import UserForm from "@/components/user-form";
import { User } from "@/types";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

export default function UserTable({ users }: { users: User[] }) {
  const [selectAll, setSelectAll] = useState<string[]>([]);
  console.log("chec", selectAll);

  return (
    <div className="overflow-x-auto border border-base-200 rounded-lg">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            {/* <th>Serial No.</th> */}
            <th>
              <input
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectAll([...users.map((item) => item.id)]);
                  } else {
                    setSelectAll([]);
                  }
                }}
                checked={selectAll.length === users.length}
                type="checkbox"
                className="checkbox checkbox-sm"
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, index) => (
              <tr
                key={item.email}
                // className="[&:has(input:checked)]:bg-base-200 "
                className="has-[input:checked]:bg-base-200 "
              >
                {/* <th>{index + 1}</th> */}
                <th>
                  <input
                    checked={selectAll.includes(item.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectAll((prev) => [...prev, item.id]);
                      } else {
                        setSelectAll(selectAll.filter((id) => id !== item.id));
                      }
                    }}
                    type="checkbox"
                    className="checkbox checkbox-sm"
                  />
                </th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>{new Date().toDateString()}</td>
                <td>
                  <button
                    onClick={() =>
                      (
                        document.getElementById("my-modal") as HTMLDialogElement
                      ).showModal()
                    }
                    className="btn btn-ghost btn-sm p-0 aspect-square"
                  >
                    <MdEdit size={18} />
                  </button>

                  <dialog id="my-modal" className="modal">
                    <div className="modal-box">
                      <UserForm />
                    </div>

                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </td>
              </tr>
            ))}
          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
}

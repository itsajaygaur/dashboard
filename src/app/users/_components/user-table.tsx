"use client";
import UserForm from "@/components/user-form";
import { User } from "@/types";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import AddNewBtn from "./add-new-btn";
import { deleteUser } from "@/app/actions";

export default function UserTable({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<string[]>([]);

  return (
    <>
      <div className="flex justify-between gap-5 items-center mb-5">
        <h1>Leads</h1>
        <div className="flex items-center gap-2">
          {selectedUser.length > 0 && (
            <>
              <button
                onClick={() =>
                  (
                    document.getElementById("delete-modal") as HTMLDialogElement
                  ).showModal()
                }
                className="btn  btn-error "
              >
                Delete
              </button>

              <dialog id="delete-modal" className="modal">
                <div className="modal-box rounded-lg">
                  <h2 className="text-xl  font-semibold">
                    Are you absolutely sure?
                  </h2>
                  <p className="mb-10 text-sm ">This action cannot be undone</p>
                  <form
                    method="dialog"
                    className="flex gap-4 items-center justify-end"
                  >
                    <button className="btn btn-ghost">Cancel</button>
                    <button
                      onClick={async () => deleteUser(selectedUser)}
                      className="btn btn-error "
                    >
                      Delete
                    </button>
                  </form>
                </div>

                {/* Close dialog when user click outside dialog */}
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </>
          )}
          <AddNewBtn />
        </div>
      </div>

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
                      setSelectedUser([...users.map((item) => item.id)]);
                    } else {
                      setSelectedUser([]);
                    }
                  }}
                  checked={selectedUser.length === users.length}
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
                  className="has-[input:checked]:bg-base-200 hover:bg-base-200"
                >
                  {/* <th>{index + 1}</th> */}
                  <th>
                    <input
                      checked={selectedUser.includes(item.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedUser((prev) => [...prev, item.id]);
                        } else {
                          setSelectedUser(
                            selectedUser.filter((id) => id !== item.id)
                          );
                        }
                      }}
                      type="checkbox"
                      className="checkbox checkbox-sm"
                    />
                  </th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.status}</td>
                  <td>{item.createdAt.toDateString()}</td>
                  <td>
                    <button
                      onClick={() =>
                        (
                          document.getElementById(
                            "my-modal"
                          ) as HTMLDialogElement
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
    </>
  );
}

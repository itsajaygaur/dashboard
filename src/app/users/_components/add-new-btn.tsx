"use client";
import UserForm from "@/components/user-form";
import { BsThreeDots } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

export default function AddNewBtn() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          (document.getElementById("my-modal") as HTMLDialogElement).showModal()
        }
      >
        <FiPlus /> Add New
      </button>

      <dialog id="my-modal" className="modal">
        <div className="modal-box">
          <UserForm />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

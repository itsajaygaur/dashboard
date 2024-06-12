export default function UserForm() {
  return (
    <>
      <h3 className="text-xl font-semibold mb-6">Add User</h3>
      <form method="dialog" action="">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>

          <div>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Status
              </option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className=" flex justify-end items-center gap-2 mt-8 ">
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() =>
              (document.getElementById("my-modal") as HTMLDialogElement).close()
            }
          >
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

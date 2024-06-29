"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type UserSchema } from "@/types/zod-schemas";
import { ErrorMessage } from "@hookform/error-message";
import { addUser, updateUser } from "@/app/actions";
import { User } from "@/db/schema";

export default function UserForm({ user }: { user?: User }) {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  async function submitHandler(data: UserSchema) {
    try {
      const res = user ? await updateUser(data, user?.id) : await addUser(data);
      if (res.success) {
        reset();
        (
          document.getElementById(
            user?.id?.toString() || "my-modal"
          ) as HTMLDialogElement
        ).close();
      }
    } catch (error) {
      console.log("something went wrong");
    }
  }

  if (user) {
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("status", user.status);
  }

  return (
    <>
      <h3 className="text-xl font-semibold mb-6">Add User</h3>
      <form method="dialog" onSubmit={handleSubmit(submitHandler)}>
        <div className="space-y-4">
          <div>
            <input
              {...register("name")}
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p className="text-error text-xs mt-1 ">{message}</p>
              )}
            />
          </div>

          <div>
            <input
              {...register("email")}
              type="text"
              className="input input-bordered w-full"
              placeholder="Email"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-error text-xs mt-1 ">{message}</p>
              )}
            />
          </div>

          <div>
            <select
              {...register("status")}
              defaultValue=""
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <ErrorMessage
              errors={errors}
              name="status"
              render={({ message }) => (
                <p className="text-error text-xs mt-1 ">{message}</p>
              )}
            />
          </div>
        </div>

        <div className=" flex justify-end items-center gap-2 mt-8 ">
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() =>
              (
                document.getElementById(
                  user?.id?.toString() || "my-modal"
                ) as HTMLDialogElement
              ).close()
            }
          >
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            className="btn btn-primary"
            type="submit"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </>
  );
}

"use server";
import { type UserSchema } from "@/types/zod-schemas";
import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { User, users } from "@/db/schema";
import { inArray, eq } from "drizzle-orm";

// export async function addUser(user: z.infer<typeof userSchema>) {
//   try {
//     const q = query(collection(db, "users"), where("email", "==", user.email));

//     const querySnapshot = await getDocs(q);
//     if (querySnapshot.size > 0) {
//       return { success: false, message: "user already exists with this email" };
//     }

//     await addDoc(collection(db, "users"), {
//       ...user,
//       createdAt: serverTimestamp(),
//     });
//     revalidatePath("/users");
//     return { success: true, message: "user added successfully!" };
//   } catch (error) {
//     return { success: false, message: "something went wrong" };
//   }
// }

export async function addUser(user: UserSchema) {
  try {
    // if(!user.status) return { success: false, message: "status is required" };
    await db.insert(users).values({
      name: user.name,
      email: user.email,
      status: user.status,
    });
    revalidatePath("/users");
    return { success: true, message: "user added successfully!" };
  } catch (error) {
    return { success: false, message: "something went wrong" };
  }
}

export async function updateUser(user: UserSchema, id: number) {
  try {
    await db.update(users).set(user).where(eq(users.id, id));
    revalidatePath("/users");
    return { success: true, message: "user updated successfully!" };
  } catch (error) {
    return { success: false, message: "something went wrong" };
  }
}

export async function deleteUser(userIds: number[]) {
  try {
    if (userIds.length === 0) {
      return { success: false, message: "no user selected" };
    }
    await db.delete(users).where(inArray(users.id, userIds));
    revalidatePath("/users");
    return { success: true, message: "user deleted successfully!" };
  } catch (error) {
    console.log("err", error);
    return { success: false, message: "something went wrong" };
  }
}

"use server";
import { z } from "zod";
import { userSchema } from "@/types/zod-schemas";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { revalidatePath } from "next/cache";

export async function addUser(user: z.infer<typeof userSchema>) {
  try {
    const q = query(collection(db, "users"), where("email", "==", user.email));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      return { success: false, message: "user already exists with this email" };
    }

    await addDoc(collection(db, "users"), {
      ...user,
      createdAt: serverTimestamp(),
    });
    revalidatePath("/users");
    return { success: true, message: "user added successfully!" };
  } catch (error) {
    return { success: false, message: "something went wrong" };
  }
}

import { z } from "zod";
import { users } from "@/db/schema";
export const userSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  status: z.enum(users.status.enumValues, { message: "Please select a value" }),
  // .nullable()
  // .refine((val) => val !== null, { message: "Please select a value" }),
});

export type UserSchema = z.infer<typeof userSchema>;

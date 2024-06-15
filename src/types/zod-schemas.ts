import { z } from "zod";

export const userSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  status: z
    .enum(["active", "inactive"], { message: "Please select a value" })
    .nullable()
    .refine((val) => val !== null, { message: "Please select a value" }),
});

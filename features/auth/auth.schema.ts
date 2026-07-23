import * as z from "zod";

export const RegisterUserSchema = z.object({
  name: z.string().min(1),
  email: z.email({ message: "Please provide a valid email address" }),
  password: z.string().min(8),
});

export type RegisterUser = z.infer<typeof RegisterUserSchema>; 


export const loginSchema = z.object({
  email: z.email({ message: "Please provide a valid email address" }),
  password: z.string().min(8),
});

export type Login = z.infer<typeof loginSchema>; 
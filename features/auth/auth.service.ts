import { hash } from "bcrypt";
import { authRepository } from "./auth.repository";
import {
  loginSchema,
  RegisterUserSchema,
  type RegisterUser,
} from "./auth.schema";

// auth.service.ts
export async function registerUser(user: RegisterUser) {
  const result = RegisterUserSchema.safeParse(user);

  if (!result.success) {
    throw result.error;
  }

  const existingUser = await authRepository.getUserByEmail(result.data.email);
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hash(result.data.password, 10);

  const createdUser = await authRepository.register({
    ...result.data,
    password: hashedPassword,
  });

  return createdUser;
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const result = loginSchema.safeParse({ email, password });

  if (!result.success) {
    throw result.error;
  }

  const existingUser = await authRepository.getUserByEmail(result.data.email);
  if (!existingUser) {
    throw new Error("User does not exist");
  }
  return existingUser;
}

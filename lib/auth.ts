import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

export async function authenticate() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  return verifyToken(token);
}

export async function authorize(...roles: string[]) {
  const user = await authenticate();

  if (!roles.includes(user.role)) {
    throw new Error("Forbidden");
  }

  return user;
}

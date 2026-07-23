import { RegisterUserInput } from "@/types/types";
import prisma from "@/lib/prisma";
import { RegisterUser } from "./auth.schema";

class AuthRepository {
  async register(user: RegisterUser) {
    const newUser = await prisma.user.create({
      data: user,
    });
    return newUser;
  }

  async getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  async deleteUser(id: number) {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    return deletedUser;
  }

  async updateUser(id: number, user: RegisterUserInput) {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: user,
    });
    return updatedUser;
  }
}

export const authRepository = new AuthRepository();

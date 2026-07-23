import { NextRequest, NextResponse } from "next/server";

import { loginUser } from "@/features/auth/auth.service";
import { generateToken } from "@/lib/jwt";
import { handleApiError } from "@/lib/error-handler";
import { setSessionCookie } from "@/lib/cookies";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const user = await loginUser(body);

    const token = generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    await setSessionCookie(token);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    handleApiError(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

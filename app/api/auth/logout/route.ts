import { deleteSessionCookie } from "@/lib/cookies";
import { NextResponse } from "next/server";

export async function POST() {
  await deleteSessionCookie();
  return NextResponse.json({ message: "Success" }, { status: 200 });
}

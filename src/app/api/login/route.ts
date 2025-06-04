import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "secret_authentication";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (email === "admin" && password === "admin") {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    return NextResponse.json({ token });
  }

  return NextResponse.json(
    { message: "Невернно введен логин или пароль" },
    { status: 401 }
  );
}

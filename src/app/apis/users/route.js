import { NextResponse } from "next/server";

export function GET() {
  const users = [
    {
      name: "mudasir",
      age: 22,
    },
    {
      name: "mubashir",
      age: 20,
    },
  ];

  return NextResponse.json(users);
}

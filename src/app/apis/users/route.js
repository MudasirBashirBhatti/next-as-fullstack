import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

//GET Request
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

//PUT Request
export function PUT() {}

//POST Request
export function POST() {}

//DELETE Request
export function DELETE() {}

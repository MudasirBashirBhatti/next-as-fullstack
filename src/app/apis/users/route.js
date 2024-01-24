import { connectDb } from "@/helper/db";
import { User } from "@/models/users.model";
import { NextResponse } from "next/server";

connectDb();

//GET Request
export function GET() {}

//PUT Request
export function PUT() {}

//POST Request to put users data in database
export async function POST(request) {
  const { name, email, password, about } = await request.json();
  const user = new User({
    name,
    email,
    password,
    about,
  });

  try {
    // save the object to database
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "failed to create user",
      status: false,
    });
  }
}

//DELETE Request
export function DELETE() {}

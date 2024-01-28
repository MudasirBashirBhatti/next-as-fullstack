import { connectDb } from "@/helper/db";
import { User } from "@/models/users.model";
import { NextResponse } from "next/server";

connectDb();

//GET Request
export async function GET() {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    return NextResponse.json(users, {
      status: 201,
      message: "failed to get users",
    });
  }
  return NextResponse.json(users);
}

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
    const response = NextResponse.json(createdUser, {
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

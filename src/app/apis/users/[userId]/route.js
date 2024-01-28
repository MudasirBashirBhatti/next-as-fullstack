import { User } from "@/models/users.model";
import { NextResponse } from "next/server";

// user delete request
export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "user has been deleted successfully!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "user has not been deleted!!",
      success: false,
    });
  }
}

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    let singleUser = await User.findById(userId);
    return NextResponse.json(singleUser, {
      message: "Get user successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to get single user",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about } = await request.json();
  try {
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.about = about;
    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "error to update user",
      status: 500,
    });
  }
}

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

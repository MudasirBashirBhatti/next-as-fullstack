import { Work } from "@/models/work.model";
import { NextResponse } from "next/server";

// get single user work by his id
export async function GET(request, { params }) {
  const { workId } = params;
  try {
    const getSingleWork = await Work.findById(workId);
    return NextResponse.json(getSingleWork);
  } catch (error) {
    return NextResponse.json({
      message: "failed to get users's work",
      success: "false",
    });
  }
}

// update single user work by his id
export async function PUT(request, { params }) {
  const { workId } = params;
  const { title, content, status } = await request.json();
  try {
    const work = await Work.findById(workId);
    work.title = title;
    work.content = content;
    work.status = status;

    const updatedWork = await work.save();
    return NextResponse.json(updatedWork);
  } catch (error) {
    return NextResponse.json({
      message: "failed to updated user's work",
      success: "true",
    });
  }
}

// delete single user work by his id
export async function DELETE(request, { params }) {
  const { workId } = params;
  try {
    await Work.deleteOne({
      _id: workId,
    });
    return NextResponse.json("Task deleted");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to delete user",
      success: "false",
    });
  }
}

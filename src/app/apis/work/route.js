import { Work } from "@/models/work.model";
import { NextResponse } from "next/server";

// create new work
export async function POST(request) {
  const { title, content, createdBy, status, userId } = await request.json();
  const work = new Work({
    title,
    content,
    createdBy,
    status,
    userId,
  });

  try {
    const createdWork = await work.save();
    return NextResponse.json(createdWork);
  } catch (error) {
    return NextResponse.json({
      message: "failed to create work",
      success: false,
    });
  }
}

// get work api
export async function GET() {
  const work = await Work.find();
  return NextResponse.json(work);
}

import { Work } from "@/models/work.model";
import { NextResponse } from "next/server";

// create new work
export async function POST(request) {
  const { title, content, createdBy, status } = await request.json();
  const work = new Work({
    title,
    content,
    createdBy,
    status,
  });

  try {
    const createdWork = await work.save();
    return NextResponse.json(createdWork, {
      message: "new work created",
      success: true,
    });
  } catch (error) {}
}

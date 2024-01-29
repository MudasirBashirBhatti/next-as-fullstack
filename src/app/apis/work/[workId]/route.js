import { Work } from "@/models/work.model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { workId } = params;
  try {
    const getSingleWork = await Work.findById(workId);
    return NextResponse.json(getSingleWork);
  } catch (error) {}
}

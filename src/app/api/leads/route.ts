import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // ensure you have src/lib/prisma.ts per the starter

export async function GET() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(leads);
}

export async function POST(req: Request) {
  const data = await req.json();
  const lead = await prisma.lead.create({ data });
  return NextResponse.json(lead, { status: 201 });
}

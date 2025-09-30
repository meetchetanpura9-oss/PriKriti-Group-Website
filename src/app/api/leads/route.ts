import { NextResponse } from "next/server";
// route.ts is at src/app/api/leads/route.ts
import { prisma } from "../../../lib/prisma";


export async function GET() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(leads);
}

export async function POST(req: Request) {
  const data = await req.json();
  const lead = await prisma.lead.create({ data });
  return NextResponse.json(lead, { status: 201 });
}

// src/app/api/leads/route.ts
import { NextResponse } from "next/server";
// route.ts is at src/app/api/leads/route.ts
// go up three folders to reach src/lib/prisma.ts
import { prisma } from "src/app/api/leads/lib/prisma";

export async function GET() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(leads);
}

export async function POST(req: Request) {
  const data = await req.json();
  const created = await prisma.lead.create({ data });
  return NextResponse.json(created, { status: 201 });
}

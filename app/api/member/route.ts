// post to prisma to add a new member

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

interface ScopeData {
  name: string;
  email: string;
}

export async function POST(req: Request) {
  try {
    const request = await req.json().then((data) => data);

    const scope = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${request.access_token}`,
    );
    const scopeJson = await scope.json();
    const { name: userName, email: userEmail }: ScopeData = scopeJson;

    const newMember = await prisma.guest.upsert({
      where: {
        email: userEmail,
      },
      create: {
        name: userName,
        email: userEmail,
      },
      update: {
        name: userName,
      },
    });

    return new NextResponse(JSON.stringify({ message: "welcome" }), {
      status: 200,
      statusText: "OK",
    });
  } catch (err) {
    console.log("list.ts error: ", err);
    return new NextResponse(JSON.stringify({ message: "fail" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    const params = req?.nextUrl?.searchParams.get("id");
    const getMember = await prisma.guest.findUnique({
      where: {
        id: Number(params),
      },
      select: {
        id: true,
        email: true,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: `success`, user: getMember }),
    );
  } catch (err) {
    console.log("list.ts error: ", err);
    return new NextResponse(JSON.stringify({ message: `fail :: ${err}` }));
  }
}

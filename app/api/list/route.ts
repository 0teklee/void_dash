import { NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      take: 20,
      where: {
        id: {
          not: 9,
        },
        private: false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ message: "success", posts: posts });
  } catch (err) {
    console.log("main page list.ts error: ", err);
    return new NextResponse(JSON.stringify({ message: "fail" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

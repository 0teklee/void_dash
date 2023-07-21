import { NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

export async function GET() {
  try {
    console.log("posts ::", await prisma.post.findMany());

    const posts = await prisma.post.findMany({
      take: 20,
      where: {
        id: {
          not: 9,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log("posts ::", posts);

    return new NextResponse(
      JSON.stringify({ message: "success", posts: posts }),
      { status: 200, statusText: "OK" },
    );
  } catch (err) {
    console.log("main page list.ts error: ", err);
    return new NextResponse(JSON.stringify({ message: "fail" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

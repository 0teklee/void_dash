import { NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

export async function POST(req: Request) {
  try {
    const request = await req.json().then((data) => data);
    const post = await prisma.post.create({
      data: {
        title: request.title,
        content: request.content,
        private: request.isPrivate || request.private,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "success", postId: post.id }),
      { status: 200, statusText: "OK" },
    );
  } catch (err) {
    console.log("write.ts error: ", err);
    return new NextResponse(JSON.stringify({ message: "fail" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

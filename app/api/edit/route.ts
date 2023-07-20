import { NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

export async function GET(req: Request) {
  try {
    const posts = await prisma.post.findMany();

    return new NextResponse(
      JSON.stringify({ message: "success", posts: posts }),
      { status: 200, statusText: "OK" },
    );
  } catch (err) {
    console.log("list.ts error: ", err);
    return new NextResponse(JSON.stringify({ message: "fail" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

export async function PUT(req: Request) {
  try {
    const request = await req.json().then((data) => data);
    const post = await prisma.post.update({
      where: {
        id: request.postId,
      },
      data: {
        title: request.title,
        content: request.content,
        private: request.private,
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

import { NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

export async function GET(req: Request) {
  console.log("postId", req);

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const post = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        viewCount: {
          increment: 1,
        },
      },
      select: {
        viewCount: true,
        content: true,
        title: true,
        createdAt: true,
        private: true,
        id: true,
      },
    });

    const res = NextResponse.json({
      post: { ...post, createdAt: post.createdAt.toISOString() },
    });

    return res;
  } catch (err) {
    console.log("list.ts error: ", err);
    return new NextResponse(
      JSON.stringify({ message: "fail", errorCode: 404 }),
      {
        status: 500,
        statusText: "Internal Server Error",
      },
    );
  }
}

import { NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
      },
    });

    const retunPosts = posts.map((post) => {
      return {
        id: String(post.id),
      };
    });

    return new NextResponse(
      JSON.stringify({ message: "success", posts: retunPosts }),
      { status: 200, statusText: "OK" },
    );
  } catch (err) {
    console.log("id-list.ts error: ", err);
    return new NextResponse(JSON.stringify({ message: "fail" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

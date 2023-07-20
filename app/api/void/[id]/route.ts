import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

export async function GET(req: NextRequest) {
  try {
    console.log("req", req);
    const pathNameArray = req.nextUrl.pathname.split("/");
    const postId = pathNameArray[pathNameArray.length - 1];

    const updateViewCount = await prisma.post.update({
      where: {
        id: Number(postId),
      },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    const post = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
    });

    return new NextResponse(JSON.stringify({ message: "success", post }), {
      status: 200,
      statusText: "OK",
    });
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

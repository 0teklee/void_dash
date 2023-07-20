import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";

export const POST = async (req: NextRequest) => {
  const request = await req.json();
  const { content, nickname, postId, userId, isPrivate } = request;

  const createPost = await prisma.comment.create({
    data: {
      content,
      nickname,
      guest: {
        connect: {
          id: Number(userId),
        },
      },
      post: {
        connect: {
          id: Number(postId),
        },
      },
      isPrivate: isPrivate,
    },
  });

  return new NextResponse(JSON.stringify({ message: "success", createPost }));
};

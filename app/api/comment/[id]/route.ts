import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export const GET = async (req: NextRequest, res: Response) => {
  const postId = req.url.split("/")[5];
  const cookie = cookies();
  const userToken = cookie.get("next-auth.session-token")?.value;
  const decoded =
    userToken &&
    (await decode({
      token: userToken,
      secret: process.env.NEXT_PUBLIC_SECRET as string,
    }));

  const isMaster = decoded && decoded?.email === process.env.NEXT_MASTER_ID;

  try {
    const userAuth =
      decoded &&
      (await prisma.guest.findUnique({
        where: {
          email: decoded?.email as string,
        },
        select: {
          id: true,
        },
      }));

    const userId = userAuth && userAuth?.id;

    const comments = await prisma.comment.findMany({
      where: {
        postId: Number(postId),
      },
      select: {
        id: true,
        content: true,
        nickname: true,
        createdAt: true,
        isPrivate: true,
        guest: {
          select: {
            email: true,
            id: true,
          },
        },
        post: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const filteredComments = comments.map((comment) => {
      if (comment.isPrivate && (!userAuth || comment?.guest?.id !== userId)) {
        comment = {
          ...comment,
          content: "This is a private comment 🔒",
          nickname: "anonymous",
        };
      }
      return comment;
    });

    return new NextResponse(
      JSON.stringify({
        message: "success",
        comments: isMaster ? comments : filteredComments,
      }),
    );
  } catch (e) {
    console.log("err ::", e);
    return new NextResponse(JSON.stringify({ message: "error", err: e }), {
      status: 500,
    });
  }
};

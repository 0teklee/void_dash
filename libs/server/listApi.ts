import prisma from "@/prisma/prismaClient";
import { IPostData } from "@/libs/client/types";

export const getAllPostId = async (): Promise<{
  postsId: { id: number }[];
}> => {
  const postsId = await prisma.post.findMany({
    select: {
      id: true,
    },
  });
  return { postsId };
};

export const getMainPageList = async (): Promise<{
  posts: IPostData[];
}> => {
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
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      private: true,
      viewCount: true,
    },
  });
  return { posts };
};

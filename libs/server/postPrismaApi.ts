import prisma from "@/prisma/prismaClient";

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

export const getPostData = async (id: number) => {
  const post = await prisma.post.update({
    where: {
      id: id,
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
  const postDate = new Date(post.createdAt).toISOString();
  const postRes = { ...post, createdAt: postDate };

  return { post: postRes };
};

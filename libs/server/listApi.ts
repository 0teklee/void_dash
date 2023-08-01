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

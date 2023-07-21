import React from "react";
import Header from "@/components/modules/Header";
import DetailTemplate from "@/components/templates/DetailTemplate";
import { getAllPostId } from "@/libs/server/listApi";
import { notFound } from "next/navigation";
import { getContentImg } from "@/utils/formatter";
import { getPostData } from "@/libs/server/detailApi";

const Page = async (props: {
  params: {
    id: string;
  };
}) => {
  if (!props?.params?.id) {
    return null;
  }

  const postId = props.params.id as string;
  const data = await getPostData(Number(postId));

  return (
    <>
      <Header />
      <main>{<DetailTemplate data={data} searchParams={postId} />}</main>
    </>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const { postsId } = await getAllPostId();
  const posts = postsId.map((item) => ({
    id: item.id.toString(),
  }));

  return posts;
};

export async function generateMetadata(props: { params: { id: string } }) {
  const data = await getPostData(Number(props?.params?.id));
  if (!data) {
    return notFound();
  }

  const ImageSrc = getContentImg(data?.post.content) ?? `/sign.jpegs`;
  const SEOImage = ImageSrc?.substring(1, ImageSrc.length);

  return {
    title: data.post.title,
    description: data.post.content,
    openGraph: {
      title: data.post.title,
      description: data.post.content,
      images: SEOImage,
    },
  };
}

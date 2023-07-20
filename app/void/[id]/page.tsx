import React from "react";
import DetailTemplate from "@/components/templates/DetailTemplate";
import Header from "@/components/modules/Header";
import { getContentImg } from "@/utils/formatter";
import { notFound } from "next/navigation";

const getData = async (postId: string) => {
  const res = await fetch(`/api/void/${postId}`);
  const data = await res.json();

  return data;
};

const DetailPage = async (props: {
  params: {
    id: string;
  };
}) => {
  const postId = props?.params?.id as string;

  const data = await getData(postId);

  return (
    <>
      <Header />
      <main>
        <DetailTemplate data={data} searchParams={postId} />
      </main>
    </>
  );
};

export default DetailPage;

export async function generateStaticParams() {
  const { posts } = await fetch(`/api/id-list`, {
    next: { revalidate: 15 },
  }).then((res) => res.json());

  return posts;
}

export async function generateMetadata(props: { params: { id: string } }) {
  const data = await getData(props?.params?.id);
  if (!data || data.errorCode === 404) {
    notFound();
  }

  const ImageSrc = getContentImg(data?.content) ?? `/sign.jpegs`;
  const SEOImage = ImageSrc?.substring(1, ImageSrc.length);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.content,
      images: SEOImage,
    },
  };
}

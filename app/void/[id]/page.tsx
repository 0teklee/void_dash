import React from "react";
import Header from "@/components/modules/Header";
import DetailTemplate from "@/components/templates/DetailTemplate";
import { getAllPostId, getPostData } from "@/libs/server/postPrismaApi";
import { getContentImg, htmlReplace } from "@/utils/formatter";
import Head from "next/head";

// const getDetailPost = async (id: string) => {
//   try {
//     const data = await fetch(`${process.env.NEXT_APP_URL}/api/post/${id}`, {
//       method: "GET",
//     });
//     const resJson = await data.json();
//     return resJson;
//   } catch (err) {
//     console.error("in fetch getDetailPost err", err);
//     return err;
//   }
// };

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
      <Head>
        <title>{data?.post?.title || `VOID_${props.params.id}`}</title>
        <meta
          property="og:title"
          content={data?.post?.title || `VOID_${props.params.id}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={`${htmlReplace(data?.post?.content)?.slice(0, 150) || ""}`}
        />
        <meta
          property="og:image"
          content={getContentImg(data?.post?.content) || `/card.JPG`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`${process.env.NEXT_APP_URL}/void/${props.params.id}`}
        />
        <meta
          name="twitter:image"
          content={getContentImg(data?.post?.content) || `/card.JPG`}
        />
        <meta name="twitter:image:alt" content={`void`} />
        <meta
          name="twitter:title"
          content={data?.post?.title || `VOID_${props.params.id}`}
        />
        <meta name="twitter:creator" content="_void" />
      </Head>
      <body>
        <Header />
        <main>{<DetailTemplate data={data} searchParams={postId} />}</main>
      </body>
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
    return null;
  }

  const ImageSrc = getContentImg(data?.post?.content) ?? `/sign.jpegs`;
  const SEOImage = ImageSrc?.substring(1, ImageSrc.length);

  return {
    title: data?.post?.title,
    description: htmlReplace(data?.post?.content)?.slice(0, 150) || "",
    openGraph: {
      title: data?.post?.title,
      description: htmlReplace(data?.post?.content)?.slice(0, 150) || "",
      images: ImageSrc,
    },
  };
}

"use client";

import React from "react";
import Image from "next/image";
import { getContentImg } from "@/utils/formatter";
import htmlParser from "@/libs/utils";
import { useRouter } from "next/navigation";
import Ascii from "@/components/modules/Ascii";
import { keys } from "@/libs/ascii";

interface IPostData {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category: string;
  private: boolean;
  viewCount: number;
}

const ListItem = ({ data }: { data: IPostData }) => {
  const {
    id,
    title,
    content,
    createdAt,
    category,
    private: isPrivate,
    viewCount,
  } = data;

  const hasImage = content.includes("cloudinary" || "img");
  const imgString = getContentImg(content);
  const router = useRouter();

  return (
    <div
      className={`relative w-[300px] h-[424px] overflow-hidden truncate text-primary`}
    >
      {!isPrivate && hasImage && imgString && (
        <div
          className={`cursor-pointer hover:opacity-80`}
          onClick={() => {
            router.push(`/void/${id}`);
          }}
        >
          <Image
            src={imgString as string}
            alt={title}
            fill={true}
            objectFit={`cover`}
          />
          <p className={`text-xs font-light text-[#fff]`}>{createdAt}</p>
          <p className={`text-base font-normal`}>{title}</p>
        </div>
      )}
      {!isPrivate && !hasImage && (
        <div
          className={`cursor-pointer hover:opacity-80`}
          onClick={() => {
            router.push(`/void/${id}`);
          }}
        >
          <h2 className={`text-4xl font-medium md:text-3xl`}>{title}</h2>
          <p className={`text-xs font-light text-primary`}>{createdAt}</p>
          <div className={`text-md font-normal`}>{htmlParser(content)}</div>
        </div>
      )}
      {isPrivate && (
        <div
          className={`relative w-[300px] h-[400px] tracking-tighter text-gray-300`}
        >
          <p className={`text-sm font-light`}>{`private`}</p>
          <Ascii text={keys} color={`text-gray-500`} />
        </div>
      )}
    </div>
  );
};

export default ListItem;

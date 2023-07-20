"use client";
import React from "react";
import { useSession } from "next-auth/react";
import htmlParser from "@/libs/utils";
import { IExtendedSession } from "@/components/modules/CommentContainer";

interface ICommentSectionProps {
  authorId: number;
  comment: string;
  createdAt: string;
  nickname: string;
  isPrivate: boolean;
  sessionData: IExtendedSession;
}

const CommentSection = ({
  comment,
  createdAt,
  nickname,
  isPrivate,
  authorId,
  sessionData,
}: ICommentSectionProps) => {
  const { data } = useSession();
  const isOwner = sessionData?.user?.email === process.env.NEXT_MASTER_ID;
  const isAuthor = Number(sessionData?.userId) === authorId;
  const isAccessible = isOwner || isAuthor;

  return (
    <div
      className={`flex flex-col gap-2 ${
        isOwner ? "text-primary font-medium" : `text-gray-200`
      } `}
    >
      {!isPrivate && (
        <>
          <p className={`text-xl`}>{isOwner ? "void" : nickname}</p>
          <p className={`text-xs`}>{createdAt}</p>
          <div className={`text-base`}>{htmlParser(comment)}</div>
        </>
      )}
      {isPrivate && isAccessible && (
        <>
          <p className={`text-xl`}>{isOwner ? "void" : nickname}</p>
          <p className={`text-xs`}>{createdAt}</p>
          <div className={`text-base`}>{htmlParser(comment)}</div>
        </>
      )}
      {isPrivate && !isAccessible && (
        <div className={`text-gray-800`}>
          <p className={`text-lg `}>PRIVATE</p>
          <p className={`text-base line-through`}>ACCESS DENIED</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;

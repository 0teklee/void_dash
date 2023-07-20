"use client";

import React from "react";
import Editor from "@/components/modules/Editor";
import { useRouter } from "next/navigation";
import { IExtendedSession } from "@/components/modules/CommentContainer";

const CommentInput = ({
  searchParams,
  sessionData,
  refetch,
}: {
  searchParams: string;
  sessionData: IExtendedSession;
  refetch: () => void;
}) => {
  const router = useRouter();

  const fetchComment = async (
    title: string,
    content: string,
    isPrivate: boolean,
    nickname?: string,
  ) => {
    if (!nickname) {
      confirm("Please enter your nickname");
      return;
    }

    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          userId: sessionData?.userId?.toString(),
        },
        body: JSON.stringify({
          title,
          content,
          nickname,
          isPrivate: isPrivate,
          userId: sessionData?.userId?.toString(),
          postId: searchParams,
        }),
      });
      const data = await response.json();
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`flex flex-col gap-3 w-full md:w-2/3 pt-6 border-t-2 border-t-primary border-double`}
    >
      {sessionData?.user?.email && (
        <Editor
          handler={fetchComment}
          maxTitle={15}
          maxContent={500}
          isComment={true}
          maxNickname={12}
        />
      )}
      {!sessionData?.user?.email && (
        <button
          className={`text-xs text-start`}
          onClick={() => {
            router.push(`/member`);
          }}
        >
          signup to post
        </button>
      )}
    </div>
  );
};

export default CommentInput;

"use client";

import React, { Suspense } from "react";
import { useSession } from "next-auth/react";
import CommentInput from "@/components/modules/CommentInput";
import { useQuery } from "react-query";
import { ICommentDataResponse } from "@/libs/client/types";
import CommentSection from "@/components/modules/CommentSection";
import { Session } from "next-auth";
import Spinner from "@/components/modules/Spinner";

export interface IExtendedSession extends Session {
  userId: string;
}

const CommentContainer = ({ searchParams }: { searchParams: string }) => {
  const { data: session } = useSession();
  const sessionData = session as IExtendedSession;

  const fetchComment = async (): Promise<ICommentDataResponse> =>
    fetch(`/api/comment/${searchParams}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const {
    data: commentData,
    refetch,
    isSuccess,
  } = useQuery({
    queryKey: ["comment", searchParams],
    queryFn: fetchComment,
  });

  return (
    <Suspense fallback={<Spinner />}>
      <CommentInput
        searchParams={searchParams}
        sessionData={sessionData}
        refetch={refetch}
      />
      {!!commentData &&
        isSuccess &&
        commentData?.comments?.length > 0 &&
        commentData.comments.map(
          (
            {
              content,
              isPrivate,
              createdAt,
              nickname,
              guest: { id: authorId },
              post: { id: postId },
            },
            indexComment,
          ) => (
            <CommentSection
              key={`comment_${postId}_${indexComment}`}
              isPrivate={isPrivate}
              comment={content}
              createdAt={createdAt}
              authorId={authorId}
              nickname={nickname}
              sessionData={sessionData}
            />
          ),
        )}
    </Suspense>
  );
};

export default CommentContainer;

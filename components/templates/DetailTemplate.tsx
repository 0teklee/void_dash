"use client";

import React from "react";
import { IPostDetailResponse } from "@/libs/client/types";
import htmlParser from "@/libs/client/utils";
import CommentContainer from "@/components/modules/CommentContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";

const DetailTemplate = ({
  data,
  searchParams,
}: {
  data: IPostDetailResponse;
  searchParams: string;
}) => {
  const queryClient = new QueryClient();

  return (
    <div
      className={`flex flex-col items-start md:items-start mt-12 mx-auto p-9 md:p-10 text-primary gap-9`}
    >
      {!!data && !!data.post && (
        <>
          <div>
            <h1 className={`text-5xl font-semibold`}>{data.post.title}</h1>
            <p className={`text-sm font-normal`}>{data.post.createdAt}</p>
          </div>
          <div className={`mb-32 text-xl break-all`}>
            {htmlParser(data.post.content)}
          </div>
        </>
      )}
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <CommentContainer searchParams={searchParams} />
        </SessionProvider>
      </QueryClientProvider>
    </div>
  );
};

export default DetailTemplate;

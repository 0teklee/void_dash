"use client";
import React from "react";
import { useSession } from "next-auth/react";
import CommentContainer from "@/components/modules/CommentContainer";

const Page = () => {
  const { data: sessionData } = useSession();

  return (
    <div className={`flex flex-col gap-4 p-9 md:p-10 text-primary`}>
      <h1 className={`text-3xl font-semibold line-through`}>BOARD</h1>
      <CommentContainer searchParams={"9"} />
    </div>
  );
};

export default Page;

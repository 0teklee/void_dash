"use client";
import React from "react";
import { useSession } from "next-auth/react";
import NeedAuth from "@/components/modules/NeedAuth";
import Editor from "@/components/modules/Editor";

const Write = () => {
  const handleSubmit = async (
    title: string,
    content: string,
    isPrivate?: boolean,
  ) => {
    try {
      const response = await fetch("/api/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          isPrivate,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const { data: sessionData, status } = useSession();
  return (
    <>
      {status === "authenticated" &&
        sessionData?.user?.email === process.env.NEXT_MASTER_ID && (
          <div
            className={`flex flex-col justify-center items-center p-12 text-primary`}
          >
            <Editor
              handler={handleSubmit}
              maxTitle={20}
              maxContent={16000}
              isTitle={true}
              isCategory={true}
            />
          </div>
        )}
      {(!sessionData ||
        sessionData?.user?.email !== process.env.NEXT_MASTER_ID) && (
        <div
          className={`flex flex-col justify-center items-center p-12 text-primary`}
        >
          <NeedAuth />
        </div>
      )}
    </>
  );
};

export default Write;

"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Page from "@/app/member/page";

const Layout = ({ ...props }) => {
  return (
    <>
      <SessionProvider session={props.session}>
        <Page />
      </SessionProvider>
    </>
  );
};

export default Layout;

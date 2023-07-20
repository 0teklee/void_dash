"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Auth from "@/app/auth/page";

//@ts-ignore
const Layout = ({ ...props }) => {
  return (
    <SessionProvider session={props.session}>
      <Auth />
    </SessionProvider>
  );
};

export default Layout;

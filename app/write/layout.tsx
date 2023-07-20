"use client";
import React from "react";
import Write from "@/app/write/page";
import { SessionProvider } from "next-auth/react";

const Layout = () => {
  return (
    <SessionProvider>
      <Write />
    </SessionProvider>
  );
};

export default Layout;

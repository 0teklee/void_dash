"use client";

import React from "react";
import Page from "@/app/board/page";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/modules/Header";

const Layout = ({ ...props }) => {
  const queryClient = new QueryClient();
  return (
    <SessionProvider session={props.session}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Page />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Layout;

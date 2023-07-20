"use client";

import React from "react";
import Page from "@/app/edit/page";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

const Layout = async () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Page />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Layout;

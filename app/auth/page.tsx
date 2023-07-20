"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { data: session, status } = useSession();
  return (
    <div className={`flex items-center justify-center p-12 text-primary`}>
      <div>
        <h1 className={`mb-12 text-4xl text-center font-semibold`}>Auth</h1>
        {!session && (
          <>
            <h1 className={`mb-6 text-2xl font-medium`}>Log In</h1>
            <Link
              className={`bg-primary text-white py-2 px-4 rounded-md`}
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              Login With Github
            </Link>
          </>
        )}
        {session?.user && (
          <>
            <h1 className={`mb-6 text-2xl font-medium`}>Sign Out</h1>
            <Link
              className={`bg-primary text-white py-2 px-4 rounded-md`}
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;

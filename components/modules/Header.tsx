"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div
      className={`flex justify-start w-screen p-4`}
      onClick={() => {
        router.push(`/`);
      }}
    >
      <h1
        className={`text-primary text-5xl font-bold cursor-pointer`}
      >{`V̴O̴I̴D̴S̴̴ ̲&̲L̷I̷E̷S̷̴`}</h1>
    </div>
  );
};

export default Header;

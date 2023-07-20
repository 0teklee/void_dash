"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { motion, useAnimationControls } from "framer-motion";
import { ouroboro } from "@/libs/ascii";
import { terms } from "@/libs/values";

const Page = () => {
  const [direction, setDirection] = useState(1);
  const [agree, setAgree] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const { data: session, status } = useSession();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      opacity: 1,
      rotate: [0, 360 * direction],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "easeInOut",
      },
    });
    setTimeout(() => {
      setDirection(direction * -1);
    }, 30000);
  }, [direction, controls]);

  const login = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: `/`,
    });
  };

  return (
    <div
      className={`flex flex-col gap-3 justify-center items-center my-12 text-primary w-full h-full`}
    >
      <h1 className={`text-6xl font-semibold line-through`}>Members</h1>
      <div className={`text-10xs leading-none`}>
        <motion.div animate={controls} className={``}>
          <pre>
            <code>{ouroboro}</code>
          </pre>
        </motion.div>
      </div>
      <div className={`my-5`}>
        <button
          disabled={!agree}
          className={`p-2 mb-5 text-red-500 bg-black border border-primary rounded disabled:opacity-30 disabled:text-primary`}
          onClick={async () => {
            await login();
          }}
        >
          Signup with Google
        </button>
      </div>
      <div className={`flex items-center gap-3`}>
        <p className={`text-sm`}>{`I agree with the terms and conditions`}</p>
        <input
          type={`checkbox`}
          className={`bg-black focus:ring-primary`}
          onChange={(e) => {
            setAgree(e.target.checked);
          }}
        />
      </div>
      <div>
        <div className={`flex items-center gap-3 text-primary`}>
          <p className={`text-sm`}>Terms and conditions</p>
          <button
            onClick={() => {
              setIsToggle(!isToggle);
            }}
          >
            {isToggle ? "△" : "⛛"}
          </button>
        </div>
      </div>
      {isToggle && (
        <div className={`max-w-[400px] text-center text-xs`}>
          <p className={`mb-2`}>{terms.en}</p>
          <p>{terms.kr}</p>
        </div>
      )}
    </div>
  );
};

export default Page;

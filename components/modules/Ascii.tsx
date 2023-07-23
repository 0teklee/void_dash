import React from "react";

const Ascii = ({ text, color }: { text: string; color?: string }) => {
  return (
    <div
      className={`relative mt-12 w-screen sm:w-fit h-full m-2 ${
        color || `text-primary`
      }  text-[1px] md:text-md font-light leading-none`}
    >
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
};

export default Ascii;

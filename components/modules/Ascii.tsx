import React from "react";

const Ascii = ({ text, color }: { text: string; color?: string }) => {
  return (
    <div
      className={`relative w-fit max-w-2xl h-[400px] m-2 ${
        color || `text-primary`
      } text-[1px] font-light leading-none`}
    >
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
};

export default Ascii;

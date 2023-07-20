import React from "react";
import { twoSkulls } from "@/libs/ascii";

const Spinner = () => {
  return (
    <div className={`relative w-28 leading-none text-lg text-primary`}>
      <pre>
        <code>{twoSkulls}</code>
      </pre>
    </div>
  );
};

export default Spinner;

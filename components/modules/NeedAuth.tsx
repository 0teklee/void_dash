import React from "react";
import { shots } from "@/libs/client/ascii";

const NeedAuth = () => {
  return (
    <div
      className={`flex flex-col gap-5 p-12 items-center justify-center leading-none text-primary`}
    >
      <p className={`text-4xl font-semibold`}>{`F̷̧͓̘̘͘U̷̩͍̤̟̍̆̓Ç̸̻̭̺͍͉̻̀̑̽Ǩ̵̭̏̎̀̃̍ ̸̢̡͓̻̲͚̝͍̰͌͜O̴̱̣̹̼͇̗͓̎͗̀́̐̐̔͑̆͝F̸̨̘̯͕̿̈̑̕F̸̢̨͙͙̖̤̘͂̾̆͛̄͒`}</p>
      <p className={`mb-8 text-4xl font-semibold`}>{`F҉U҉C҉K҉ ҉O҉F҉F҉`}</p>
      <pre>
        <code className={`text-xs `}>{shots}</code>
      </pre>
    </div>
  );
};

export default NeedAuth;

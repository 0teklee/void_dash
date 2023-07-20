import Image from "next/image";
import { hundredEye, twoSkulls } from "@/libs/ascii";
import ListItem from "@/components/modules/ListItem";
import { IPostData } from "@/libs/types";
import Spinner from "@/components/modules/Spinner";
import { Suspense } from "react";
import Ascii from "@/components/modules/Ascii";
import Link from "next/link";

const getList = async () => {
  const res = await fetch(`/api/list`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
};

const Home = async () => {
  const data = await getList();

  return (
    <main className={`w-full h-screen bg-black  p-9 md:p-10`}>
      <h1
        className={`mb-10 text-primary text-6xl font-bold`}
      >{`V̴O̴I̴D̴S̴̴ ̲&̲L̷I̷E̷S̷̴`}</h1>
      <Suspense fallback={<Spinner />}>
        <section
          className={`flex flex-wrap  justify-center md:justify-start items-start gap-4 max-w-12xl`}
        >
          <Link href={`/board`}>
            <div className={`relative group-hover:opacity-100`}>
              <Image
                src="/horror.png"
                alt="҉P҉a҉i҉n҉"
                width={400}
                height={300}
                priority
              />
              <p
                className={`text-xl text-primary line-through`}
              >{`d̷o̷n̷'̷t̷ ̷s̷i̷n̷g̷ ̷s̷c̷r̷e̷e̷c̷h̷ ̷i̷n̷ ̷p̷a̷i̷n̷`}</p>
            </div>
          </Link>
          <Ascii text={hundredEye} />
          <Link href={`/member`}>
            <Image
              src="/sign.jpeg"
              alt="҉P҉a҉i҉n҉"
              width={300}
              height={300}
              priority
            />
          </Link>
          {!!data &&
            !!data?.posts &&
            data.posts.length > 0 &&
            data.posts.map((item: IPostData, index: number) => {
              return <ListItem key={`list_item_${index}`} data={item} />;
            })}
          <Ascii text={twoSkulls} />
        </section>
      </Suspense>
    </main>
  );
};

export default Home;

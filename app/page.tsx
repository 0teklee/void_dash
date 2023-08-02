import Image from "next/image";
import { hundredEye, twoSkulls } from "@/libs/client/ascii";
import Ascii from "@/components/modules/Ascii";
import Link from "next/link";
import ListItem from "@/components/modules/ListItem";
import { IPostData } from "@/libs/client/types";

const getList = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_APP_URL}/api/list`, {
      method: "GET",
      next: {
        revalidate: 600,
      },
    });
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.log("in fetch getList err", err);
    return err;
  }
};

const Home = async () => {
  const data = await getList();

  return (
    <main className={`w-full h-screen bg-black  p-9 md:p-10`}>
      <h1
        className={`mb-10 text-primary text-6xl font-bold`}
      >{`V̴O̴I̴D̴S̴̴ ̲&̲L̷I̷E̷S̷̴`}</h1>
      <section
        className={`flex flex-wrap justify-center md:justify-start items-start gap-4 max-w-12xl`}
      >
        <Link href={`/board`}>
          <div className={`relative group-hover:opacity-100`}>
            <Image
              src="/horror.jpeg"
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
        <Link className={`mt-5 mb-12`} href={`/member`}>
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
    </main>
  );
};

export default Home;

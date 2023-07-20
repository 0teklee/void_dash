import React, { Suspense, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { formats, toolbarOptions } from "@/utils/editorVar";
import { ImageUpload } from "@/utils/fetcher";
import { useRouter } from "next/navigation";

const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // @ts-ignore
    return ({ forwardedRef, ...props }) => {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false },
);

const Editor = ({
  handler,
  maxTitle,
  maxContent,
  isCategory,
  isTitle,
  isComment,
  maxNickname,
}: {
  handler: (
    title: string,
    content: string,
    isPrivate: boolean,
    nickname?: string,
    postId?: number,
  ) => Promise<void>;
  maxTitle: number;
  maxContent: number;
  isCategory?: boolean;
  isTitle?: boolean;
  isComment?: boolean;
  maxNickname?: number;
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [nickname, setNickname] = useState("");
  const quillRef = useRef(null);
  const router = useRouter();

  const handleImage = () => {
    //@ts-ignore
    const editor = quillRef?.current?.getEditor();
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (!input.files) return;
      const file = input.files[0];
      const formData = new FormData();

      if (file.size > 1024 * 1024 * 1) {
        alert("file size cannot exceed 1mb");
        return;
      }

      if (/^image\//.test(file.type)) {
        formData.append("file", file);
        formData.append("upload_preset", "voidash");

        // ImageUpload = cloudinary API Post 함수
        const res = await ImageUpload(formData);
        const url = res.url;
        editor.insertEmbed(editor?.getSelection(), "image", url);
      } else {
        alert("이미지만 업로드 할 수 있습니다.");
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: handleImage,
        },
      },
    }),
    [],
  );

  const handleForm = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    if (!isComment && (!title || !content)) {
      alert("내용을 입력해주세요");
      return;
    }

    if (
      (!isComment && title.length > maxTitle) ||
      content.length > maxContent
    ) {
      alert("내용이 너무 깁니다.");
      return;
    }
    await handler(title, content, isPrivate, nickname).catch((err) => {
      console.error(err);
      confirm(`error ::  ${err}`);
      return err;
    });
    setContent(``);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isTitle && <h1 className={`text-5xl mb-12`}>Writing..</h1>}
      <form className={`pb-4 border-dashed border-b`} onSubmit={handleForm}>
        {!isComment && (
          <input
            className={`block w-1/2 p2 mb-3 bg-black placeholder:red-400`}
            placeholder="제목"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
        {isComment && (
          <div className={`flex items-center justify-start gap-2 mb-3 `}>
            <input
              className={`block p-2 bg-black placeholder:text-primary text-gray-200`}
              placeholder="name"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength={maxNickname}
            />
            <p className={`text-xs text-gray-300`}>
              {nickname.length} / {maxNickname}
            </p>
          </div>
        )}
        {isCategory && (
          <input
            className={`block w-1/2 p2 mb-3 bg-black placeholder:red-400`}
            placeholder="카테고리"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
          />
        )}
        <div className={`flex items-center gap-3 mb-3`}>
          <p className={`text-base text-white`}>Private</p>
          <input
            className={`relative`}
            type={`checkbox`}
            onChange={() => setIsPrivate((prev) => !prev)}
            checked={isPrivate}
          />
        </div>
        <div
          className={`relative flex items-center justify-center ${
            !isComment ? `max-w-[300px] md:max-w-3xl` : ""
          } `}
        >
          <QuillWrapper
            //@ts-ignore
            className={``}
            forwardedRef={quillRef}
            theme="snow"
            style={{
              width: "100%",
              blockSize: !isComment ? 400 : "100%",
              marginBottom: 20,
              fontSize: "32%",
            }}
            formats={formats}
            modules={modules}
            //@ts-ignore
            onChange={(e) => setContent(e)}
          />
          <p className={`absolute bottom-7 right-2 text-xs text-gray-300`}>
            {content.length} / {maxContent}
          </p>
        </div>
        <button
          className={`p-2  border border-primary rounded hover:text-white`}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </Suspense>
  );
};

export default Editor;

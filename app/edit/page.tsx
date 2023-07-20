"use client";

import React, { Suspense, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { ImageUpload } from "@/utils/fetcher";
import { formats, toolbarOptions } from "@/utils/editorVar";
import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import NeedAuth from "@/components/modules/NeedAuth";

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

const Page = () => {
  const getEditList = async () => {
    const res = await fetch(`/api/edit`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  };

  const { data: editListData } = useQuery("editList", getEditList);

  const [isListCliecked, setIsListClicked] = useState(false);
  const [postId, setPostId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const quillRef = useRef(null);

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("내용을 입력해주세요");
      return;
    }

    if (title.length > 191 || content.length > 16000) {
      alert("내용이 너무 깁니다.");
      return;
    }

    try {
      const response = await fetch("/api/edit", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          title,
          content,
          private: isPrivate,
        }),
      });
      const data = await response.json();
      confirm("수정되었습니다.");
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const handleForm = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault();
  };

  // Custom Image Upload Handler
  const handleImage = () => {
    //@ts-ignore-next-line
    const editor = quillRef.current.getEditor();
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (!input.files) return;
      const file = input.files[0];
      const formData = new FormData();
      if (/^image\//.test(file.type as string)) {
        //@ts-ignore
        formData.append("file", file);
        formData.append("upload_preset", "teklog");

        // ImageUpload = cloudinary API Post 함수
        const res = await ImageUpload(formData);
        const url = res.url;
        editor.insertEmbed(editor?.getSelection(), "image", url);
      } else {
        alert("이미지만 업로드 할 수 있습니다.");
      }
    };
  };

  const modules = React.useMemo(
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
  const { data: sessionData } = useSession();

  return (
    <>
      {!!sessionData &&
        sessionData?.user?.email === process.env.NEXT_MASTER_ID && (
          <Suspense fallback={<p>Loading...</p>}>
            <div className={`flex flex-col items-center p-10`}>
              <h2 className={`mb-3 text-5xl text-primary`}>Editing..</h2>
              <div className={`mb-5 text-2xl text-primary`}>
                <button onClick={() => setIsListClicked(!isListCliecked)}>
                  {isListCliecked ? "Close" : "Post list"}
                </button>
                {isListCliecked && (
                  <div className={`flex flex-wrap text-sm`}>
                    {editListData?.posts?.map((post: any) => (
                      <div key={post.id} className={`p-2`}>
                        <button
                          onClick={() => {
                            setPostId(post.id);
                            setTitle(post.title);
                            setContent(post.content);
                            setCategory(post.category);
                            setIsPrivate(post.private);
                          }}
                        >
                          {`No.${post.id} ${post.title}`}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <form onSubmit={handleForm}>
                <div>
                  <input
                    className={`mb-2 block bg-black text-3xl`}
                    placeholder="Title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  <input
                    className={`mb-4 bg-black text-2xl`}
                    placeholder="Category"
                    type="text"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  />
                </div>
                <div className={`flex items-center gap-3 mb-3`}>
                  <p className={`text-base text-white`}>Private</p>
                  <input
                    type={`checkbox`}
                    onChange={() => setIsPrivate((prev) => !prev)}
                    checked={isPrivate}
                  />
                </div>

                <div>
                  <QuillWrapper
                    //@ts-ignore
                    forwardedRef={quillRef}
                    theme="snow"
                    style={{
                      minWidth: "40rem",
                      minHeight: "30rem",
                      blockSize: 400,
                      marginBottom: 100,
                      fontSize: "32%",
                    }}
                    formats={formats}
                    modules={modules}
                    onChange={(e: string) => setContent(e)}
                    value={content}
                  />
                </div>
                <div>
                  <button type="submit" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Suspense>
        )}
      {(!sessionData ||
        sessionData?.user?.email !== process.env.NEXT_MASTER_ID) && (
        <NeedAuth />
      )}
    </>
  );
};

export default Page;

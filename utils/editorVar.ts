const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const toolbarOptions = [
  ["link", "image"],
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [
    { color: ["#fff", "#9fff33", "#a0a1ab"] },
    { background: ["#a0a1ab", "#9fff33"] },
  ],
];

export { formats, toolbarOptions };

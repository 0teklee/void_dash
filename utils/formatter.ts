import DOMPurify from "isomorphic-dompurify";

const getContentImg = (content: string): string | undefined => {
  const contentReg = content?.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
  const contentImg =
    contentReg &&
    contentReg
      .map((x: string) => x.replace(/.*src="([^"]*)".*/, "$1"))[0]
      .replace("http", "https")
      .replace("httpss", "https");
  return contentImg || undefined;
};

const htmlReplace = (html: string): string => {
  const clean = DOMPurify.sanitize(html);
  return clean.replace(/<[^>]+>/g, "");
};

export { getContentImg, htmlReplace };

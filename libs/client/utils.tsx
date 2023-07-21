import { ReactNode } from "react";
import DOMPurify from "isomorphic-dompurify";

const htmlParser = (html: string): ReactNode => {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
};

export default htmlParser;

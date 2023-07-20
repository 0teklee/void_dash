import process from "process";
import { fetcherImagePost } from "@/utils/fetcher";

const ImageUpload = async (data: FormData) => {
  const cloudName = process.env.NEXT_CLOUDINARY;
  const newTimeStamp = new Date().getTime();

  return fetcherImagePost(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    data,
  );
};

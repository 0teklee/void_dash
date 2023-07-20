import process from "process";

const fetcherImagePost = async <T extends object>(
  url: string,
  data: FormData,
): Promise<Response> => {
  return await fetch(url, {
    method: "POST",
    body: data,
  }).then((res) => res.json());
};

const ImageUpload = async (data: FormData) => {
  const cloudName = process.env.NEXT_CLOUDINARY;
  return fetcherImagePost(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    data,
  );
};

export { fetcherImagePost, ImageUpload };

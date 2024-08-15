export const getMediaSrc = (url: string) => {
  return `${process.env.SERVER_HOST}${url}`;
};

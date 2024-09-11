export const sanitizeImages = (images: string[]) => {
  return images.map((image) => image.replace(/[\[\]\"\']/g, ""));
};

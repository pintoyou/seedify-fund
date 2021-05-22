export const checkImage = (file) => {
  let err = "";
  if (!file) return (err = "file does not exist");

  if (file.type !== "image/jpeg" && file.type !== "image/png")
    err = "image format is incorrect";
  return err;
};

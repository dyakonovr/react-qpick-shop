import Typograf from "typograf";

export const normalizeText = (text: string) => {
  const typograf = new Typograf({ locale: ["ru", "en-US"] });
  return typograf.execute(text);
};

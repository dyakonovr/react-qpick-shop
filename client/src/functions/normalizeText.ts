import Typograf from "typograf";

const typograf = new Typograf({ locale: ["ru", "en-US"] });
export const normalizeText = (text: string) => {
  return typograf.execute(text);
};

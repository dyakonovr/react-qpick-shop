import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";
import { ICategory } from "@/interfaces/ICategory";

async function getCategories(): Promise<ICategory[] | string> {
  return customAxios.get(ServerPaths.CATEGORY.GET_ALL)
    .then(response => response.data)
    .catch(error => error.response.data.message)
}

export default getCategories;
import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";
import { ICategory } from "@/interfaces/ICategory";

async function getOneCategory(id: number | string): Promise<ICategory | string> {
  return customAxios.get(`${ServerPaths.CATEGORY.GET_ONE}/${id}`)
    .then(response => response.data)
    .catch(error => error.response.data.message)
}

export default getOneCategory;
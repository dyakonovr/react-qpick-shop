import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";
import { ICategory } from "@/interfaces/ICategory";

export async function createCategory(name: string): Promise<ICategory | string> {
  return customAxios.post(ServerPaths.CATEGORY.CREATE, { name })
    .then(response => response.data)
    .catch(error => error.response.data.message)
}
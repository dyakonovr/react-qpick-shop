import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";
import { ILoginResponse } from "@/interfaces/ILoginResponse";
 
async function isAuth(): Promise<ILoginResponse | string> {
  return customAxios.get(ServerPaths.USER.IS_AUTH)
    .then(response => response.data)
    .catch(error => error.response.data.message)
}

export default isAuth;
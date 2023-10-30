import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";
import { ILoginResponse } from "@/interfaces/ILoginResponse";

async function login(email: string, password: string): Promise<ILoginResponse | string> {
  return customAxios.post(ServerPaths.USER.LOGIN, { email, password })
    .then(response => response.data)
    .catch(error => error.response.data.message)
}

export default login;
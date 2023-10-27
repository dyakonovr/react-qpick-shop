import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";

interface IResponseTokenObject {
  token: string
}

async function login(email: string, password: string): Promise<IResponseTokenObject | string> {
  return customAxios.post(ServerPaths.USER.LOGIN, { email, password })
    .then(response => response.data)
    .catch(error => error.response.data.message)
}

export default login;
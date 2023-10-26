import customAxios from "@/axios";

interface IResponseTokenObject {
  token: string
}

async function login(email: string, password: string): Promise<IResponseTokenObject | string> {
  return customAxios.post("/user/login", { email, password })
    .then(response => response.data)
    .catch(error => error.response.data.message)
}

export default login;
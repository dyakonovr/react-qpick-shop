import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { ILoginResponse } from "@/interfaces/ILoginResponse";
import { AppDispatch } from "@/store/store";
import { setUser } from "@/store/user/UserSlice";
import { AxiosError, AxiosResponse } from "axios";

function fetchIsAuth() {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<ILoginResponse> = await customAxios.get(ServerPaths.USER.IS_AUTH);
      dispatch(setUser(response.data));
    } catch (e) {
      const error = e as AxiosError;
      if (error.response?.status === 401) return;

      toast({
        title: "Автоматическая авторизация пользователя",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default fetchIsAuth;
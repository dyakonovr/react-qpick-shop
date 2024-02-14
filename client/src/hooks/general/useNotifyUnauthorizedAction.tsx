import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { PagePaths } from "@/enum/PagePaths";

export const useNotifyUnauthorizedAction = () => {
  const navigate = useNavigate();

  function notifyFunction() {
    toast("Уведомление", {
      description: "Вы должны быть авторизованы, чтобы выполнить это действие",
      action: {
        label: "Войти",
        onClick: () => navigate(PagePaths.AUTHENTICATION)
      }
    });
  }

  return notifyFunction;
};

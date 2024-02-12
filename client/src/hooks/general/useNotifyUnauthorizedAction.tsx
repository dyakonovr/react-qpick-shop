import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { PagePaths } from "@/enum/PagePaths";
import { ToastAction } from "@/components/ui/toast";

export const useNotifyUnauthorizedAction = () => {
  const navigate = useNavigate();

  function notifyFunction() {
    toast({
      title: "Уведомление",
      description: "Вы должны быть авторизованы, чтобы выполнить это действие",
      action: (
        <ToastAction
          altText="Перейти к авторизации"
          onClick={() => navigate(PagePaths.AUTHENTICATION)}
        >
          Войти
        </ToastAction>
      )
    });
  }

  return notifyFunction;
};

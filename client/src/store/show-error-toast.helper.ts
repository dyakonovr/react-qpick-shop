import { toast } from "sonner";
import { errorCatch } from "@/api/api.helper";

export function showErrorToast(error: Error, toastTitle: string) {
  toast(toastTitle, {
    description: errorCatch(error)
  });
}

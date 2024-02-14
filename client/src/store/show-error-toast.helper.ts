import axios from "axios";
import { toast } from "sonner";

export function showErrorToast(error: Error, toastTitle: string) {
  let errorMessage;

  if (axios.isAxiosError(error)) errorMessage = error.response?.data.message;
  else errorMessage = error.message;

  toast(toastTitle, {
    description: errorMessage
  });
}

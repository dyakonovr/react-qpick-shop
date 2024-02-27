import { DialogTrigger } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/shadcn/dialog";

interface IModalProps {
  buttonElement: ReactNode;
  children: ReactNode;
  title?: string;
}

function Modal({ buttonElement, title, children }: IModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{buttonElement}</DialogTrigger>
      <DialogContent>
        {title && <DialogHeader>{title}</DialogHeader>}
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;

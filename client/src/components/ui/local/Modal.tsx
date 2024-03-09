import { DialogTrigger } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/shadcn/dialog";

interface IModalProps {
  openModalElement?: ReactNode;
  children: ReactNode;
  title?: string;
}

function Modal({ openModalElement, title, children }: IModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{openModalElement}</DialogTrigger>
      <DialogContent>
        {title && <DialogHeader className="font-bold text-xl">{title}</DialogHeader>}
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;

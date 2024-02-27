import { useRef } from "react";
import { AdminCategoryForm } from "./Form";
import Modal from "@/components/ui/local/Modal";
import { Button } from "@/components/ui/shadcn/button";

function AdminCategoryModal() {
  const closeModalButtonRef = useRef<HTMLButtonElement>(null);

  // Функции
  function closeModal() {
    if (!closeModalButtonRef.current) return;

    closeModalButtonRef.current.click();
  }
  // Функции END
  return (
    <Modal
      title="Создание категории"
      buttonElement={
        <Button type="submit" className="mb-3" ref={closeModalButtonRef}>
          Создать категорию
        </Button>
      }
    >
      <AdminCategoryForm onSuccess={closeModal} />
    </Modal>
  );
}

export default AdminCategoryModal;

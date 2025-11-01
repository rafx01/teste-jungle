import { useDeleteTaskById } from "@/hooks/task/useDeleteTaskById";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shadcn/ui/alert-dialog";
import { BaseButton } from "../BaseButton/BaseButton";
import { Bounce, toast } from "react-toastify";

type props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskId: string;
};

export function AlertModal({ onOpenChange, open, taskId }: props) {
  const deleteTaskById = useDeleteTaskById();

  async function handleDeleteTask() {
    try {
      await deleteTaskById.mutateAsync({ taskId });
      toast.success("Tarefa apagada com sucesso!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Erro ao apagar tarefa!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja excluir a tarefa?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancelar
          </AlertDialogCancel>
          <BaseButton
            className="cursor-pointer hover:bg-red-500"
            onClick={() => {
              handleDeleteTask();
              onOpenChange(false);
            }}
            title="Confirmar"
            variant={"destructive"}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

import { Button } from "@/shadcn/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/ui/dialog";
import { useTaskStore } from "@/stores/taskStore";
import { statusLabel } from "@/utils/statusLabel";
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";

export function TaskModal() {
  const { selectedTask, isViewModalOpen, closeTaskModal } = useTaskStore();

  if (!selectedTask) return null;

  const priorityConfig = {
    LOW: { icon: <FcLowPriority size={32} />, label: "Baixa" },
    MEDIUM: { icon: <FcMediumPriority size={32} />, label: "Média" },
    HIGH: { icon: <FcHighPriority size={32} />, label: "Alta" },
    URGENT: {
      icon: (
        <div className="flex gap-1">
          <FcHighPriority size={32} />
          <FcHighPriority size={32} />
        </div>
      ),
      label: "Urgente",
    },
  };

  return (
    <Dialog open={isViewModalOpen} onOpenChange={closeTaskModal}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{selectedTask.title}</DialogTitle>
          <DialogDescription>Detalhes da tarefa</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div>
            <h3 className="font-semibold mb-2">Descrição</h3>
            <p className="text-gray-700">{selectedTask.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Status</h3>
              <span className="px-3 py-1 rounded-full text-sm font-medium">
                {statusLabel({ status: selectedTask.status })}
              </span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Prioridade</h3>
              <div className="flex items-center gap-2">
                {priorityConfig[selectedTask.priority].icon}
                <span className="font-medium">
                  {priorityConfig[selectedTask.priority].label}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Data de Vencimento</h3>
            <p className="text-gray-700">{selectedTask.dueDate}</p>
          </div>

          {selectedTask.users && selectedTask.users.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Usuários Atribuídos</h3>
              <div className="flex flex-wrap gap-2">
                {selectedTask.users.map((user, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {user}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
          <Button
            variant="default"
            className="bg-[#7ae01a] hover:bg-[#9fe65d]"
            onClick={() => {
              console.log("Editar tarefa:", selectedTask.id);
            }}
          >
            Editar
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              console.log("Deletar tarefa:", selectedTask.id);
            }}
          >
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

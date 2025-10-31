import { useGetTaskById } from "@/hooks/task/useGetTaskById";
import { Button } from "@/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/ui/dialog";
import { useTaskStore } from "@/stores/taskStore";
import { statusLabel } from "@/utils/statusLabel";
import { SkeletonCard } from "../SkeletonCard/SkeletonCard";
import { priorityIcon } from "@/utils/priorityIcon";
import { FaRegTrashAlt } from "react-icons/fa";

export function TaskModal() {
  const { selectedTaskId, isViewModalOpen, closeTaskModal } = useTaskStore();

  const getTaskById = useGetTaskById({
    taskId: selectedTaskId,
  });

  if (!selectedTaskId) return null;

  const formattedDate = getTaskById?.data?.dueDate
    ? new Date(getTaskById?.data?.dueDate).toLocaleDateString("pt-BR")
    : "Sem data";

  return (
    <Dialog open={isViewModalOpen} onOpenChange={closeTaskModal}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {getTaskById?.data?.title}
          </DialogTitle>
          <DialogDescription>Detalhes da tarefa</DialogDescription>
        </DialogHeader>

        {getTaskById.isLoading || getTaskById.isFetching ? (
          <SkeletonCard />
        ) : (
          <>
            <div className="space-y-4 py-4">
              <div>
                <h3 className="font-semibold mb-2">Descrição</h3>
                <p className="text-gray-700">
                  {getTaskById?.data?.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Status</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium">
                    {statusLabel({ status: getTaskById?.data?.status })}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Prioridade</h3>
                  <div className="flex items-center gap-2">
                    {priorityIcon(getTaskById?.data?.priority)}
                    <span className="font-medium">
                      {priorityIcon(getTaskById?.data?.priority)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Data de Vencimento</h3>
                <p className="text-gray-700">{formattedDate}</p>
              </div>

              {getTaskById?.data?.users &&
                getTaskById?.data?.users.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Usuários Atribuídos</h3>
                    <div className="flex flex-wrap gap-2">
                      {getTaskById?.data?.users.map((user, index) => (
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
              <div
                onClick={() => {}}
                className=" w-5 h-5 items-center justify-center flex cursor-pointer"
              >
                <FaRegTrashAlt color="red" />
              </div>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

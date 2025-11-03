import { useGetTaskById } from "@/hooks/task/useGetTaskById";
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
import { FaRegTrashAlt } from "react-icons/fa";
import { AlertModal } from "../AlertModal/AlertModal";
import { useState } from "react";
import { BaseTextArea } from "../BaseTextArea/BaseTextArea";
import { IoIosSend } from "react-icons/io";
import { usePutUpdateTaskById } from "@/hooks/task/usePutUpdateTaskById";
import { Bounce, toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateTaskSchema } from "@/schemas/updateTaskSchema";
import * as Zod from "zod";
import Select from "react-select";
import { FaPen } from "react-icons/fa";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import { BaseInput } from "../BaseInput/BaseInput";
import { useGetAllUsers } from "@/hooks/users/useGetAllUsers";
import { BaseButton } from "../BaseButton/BaseButton";
import { Input } from "@/shadcn/ui/input";

export function TaskModal() {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedTaskId, isViewModalOpen, closeTaskModal } = useTaskStore();

  const getAllUsers = useGetAllUsers();

  const getTaskById = useGetTaskById({
    taskId: selectedTaskId,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Zod.infer<typeof updateTaskSchema>>({
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      dueDate: getTaskById?.data?.dueDate,
      users: getTaskById?.data?.assignments,
      description: getTaskById?.data?.description,
      priority: getTaskById?.data?.priority,
      title: getTaskById?.data?.title,
      status: getTaskById?.data?.status,
    },
  });

  const updateTask = usePutUpdateTaskById();

  if (!selectedTaskId) return null;

  const formattedDate = getTaskById?.data?.dueDate
    ? new Date(getTaskById?.data?.dueDate).toLocaleDateString("pt-BR")
    : "Sem data";

  async function handleUpdateTask(data: Zod.infer<typeof updateTaskSchema>) {
    try {
      setIsLoading(true);
      await updateTask.mutateAsync({
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
        status: data.status,
        title: data.title,
        users: data.users,
        taskId: selectedTaskId,
      });
      toast.success("Tarefa atualizada com sucesso!", {
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
      setIsLoading(false);
      setOpen(false);
    } catch (error) {
      toast.error("Falha ao atualizar tarefa!", {
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

  async function handleComment() {
    try {
    } catch (error) {}
  }

  let priorityIcon = null;

  switch (getTaskById?.data?.priority) {
    case "LOW":
      priorityIcon = <FcLowPriority size={26} />;
      break;
    case "MEDIUM":
      priorityIcon = <FcMediumPriority size={26} />;
      break;
    case "HIGH":
      priorityIcon = <FcHighPriority size={26} />;
      break;
    case "URGENT":
      priorityIcon = (
        <div className="flex flex-row gap-1">
          <FcHighPriority size={26} />
          <FcHighPriority size={26} />
        </div>
      );
      break;
  }

  return (
    <Dialog open={isViewModalOpen} onOpenChange={closeTaskModal}>
      <AlertModal
        onOpenChange={closeTaskModal}
        open={open}
        taskId={getTaskById?.data?.id}
      />
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {editing ? (
              <Controller
                control={control}
                defaultValue={getTaskById?.data?.title}
                name="title"
                render={({ field }) => (
                  <>
                    <BaseInput
                      error={errors.title?.message}
                      {...field}
                      id="title"
                      name="title"
                      placeholder="Digite o título da tarefa"
                    />
                  </>
                )}
              />
            ) : (
              getTaskById?.data?.title
            )}
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
                {editing ? (
                  <Controller
                    control={control}
                    defaultValue={getTaskById?.data?.description}
                    name="description"
                    render={({ field }) => (
                      <>
                        <BaseTextArea
                          error={errors.description?.message}
                          {...field}
                          placeholder="Digite a descrição aqui"
                        />
                      </>
                    )}
                  />
                ) : (
                  <p className="text-gray-700">
                    {getTaskById?.data?.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Status</h3>

                  {editing ? (
                    <Controller
                      control={control}
                      name="status"
                      defaultValue={getTaskById?.data?.status}
                      render={({ field }) => (
                        <select
                          {...field}
                          id="status"
                          name="status"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="TODO">A fazer</option>
                          <option value="IN_PROGRESS">Em andamento</option>
                          <option value="REVIEW">Revisão</option>
                          <option value="DONE">Feito</option>
                        </select>
                      )}
                    />
                  ) : (
                    statusLabel({ status: getTaskById?.data?.status })
                  )}
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Prioridade</h3>
                  {editing ? (
                    <Controller
                      control={control}
                      defaultValue={getTaskById?.data?.priority}
                      name="priority"
                      render={({ field }) => (
                        <select
                          {...field}
                          id="priority"
                          name="priority"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="LOW">Baixa</option>
                          <option value="MEDIUM">Média</option>
                          <option value="HIGH">Alta</option>
                          <option value="URGENT">Urgente</option>
                        </select>
                      )}
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      {priorityIcon}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Data de Vencimento</h3>
                {editing ? (
                  <Controller
                    control={control}
                    defaultValue={getTaskById?.data?.dueDate}
                    name="dueDate"
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          min={new Date().toISOString().split("T")[0]}
                          id="dueDate"
                          name="dueDate"
                          type="date"
                        />
                      </>
                    )}
                  />
                ) : (
                  <p className="text-gray-700">{formattedDate}</p>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Usuários Atribuídos</h3>

                <div className="flex flex-wrap gap-2">
                  {getTaskById?.data?.assignments.map((assignment) => (
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      key={assignment.id}
                    >
                      {assignment.id}
                    </span>
                  ))}
                </div>
              </div>
              {editing ? (
                <></>
              ) : (
                <>
                  <div className="border border-t border-slate-200" />
                  <div className="bg-red-100 w-full h-10">//coments</div>
                  <BaseTextArea placeholder="Escreva seu comentário..." />
                  <div className=" flex justify-end">
                    <div className="h-7 w-7  border cursor-pointer border-slate-300 rounded-sm items-center justify-center flex ">
                      <IoIosSend />
                    </div>
                  </div>
                </>
              )}
            </div>
            <DialogFooter>
              <div className="space-x-4 items-center flex">
                <div
                  onClick={() => setEditing(!editing)}
                  className=" w-5 h-5 items-center justify-center flex cursor-pointer"
                >
                  <FaPen />
                </div>
                {editing ? (
                  <BaseButton
                    onClick={handleSubmit(handleUpdateTask)}
                    type="submit"
                    loading={isLoading}
                    title="Confimar"
                    className=" bg-[#7ae01a] hover:bg-[#9fe65d]"
                  />
                ) : (
                  <div
                    onClick={() => setOpen(true)}
                    className=" w-5 h-5 items-center justify-center flex cursor-pointer"
                  >
                    <FaRegTrashAlt color="red" />
                  </div>
                )}
              </div>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

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
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import { BaseInput } from "../BaseInput/BaseInput";
import { BaseTextArea } from "../BaseTextArea/BaseTextArea";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Zod from "zod";
import { usePostAddTask } from "@/hooks/task/useAddTask";
import { BaseButton } from "../BaseButton/BaseButton";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { createTaskSchema } from "@/schemas/createTaskSchema";
import { useGetAllUsers } from "@/hooks/users/useGetAllUsers";
import Select from "react-select";
type AddTaskModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AddTaskModal({ open, onOpenChange }: AddTaskModalProps) {
  const [loading, setLoading] = useState(false);

  const addTask = usePostAddTask();

  const getAllUsers = useGetAllUsers();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Zod.infer<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      dueDate: new Date().toISOString(),
      users: [],
      description: "",
      priority: "LOW",
      title: "",
      status: "TODO",
    },
  });

  async function handleAddTask(data: Zod.infer<typeof createTaskSchema>) {
    try {
      setLoading(true);
      await addTask.mutateAsync({
        title: data.title,
        description: data.description,
        priority: data.priority,
        dueDate: data.dueDate,
        users: data.users,
        status: data.status,
      });
      toast.success("Tarefa cadastrada com sucesso!", {
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
      setLoading(false);
      onOpenChange(false);
    } catch (error) {
      toast.error("Falha ao cadastrar tarefa!", {
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

  useEffect(() => {
    getAllUsers.refetch();
  }, [getAllUsers]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Nova Tarefa</DialogTitle>
          <DialogDescription>
            Preencha os dados da tarefa. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-3">
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <>
                  <Label htmlFor="title">Título</Label>
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
          </div>

          <div className="grid gap-3">
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <>
                  <Label htmlFor="description">Descrição</Label>
                  <BaseTextArea
                    error={errors.description?.message}
                    {...field}
                    placeholder="Digite a descrição aqui"
                  />
                </>
              )}
            />
          </div>

          <div className="grid gap-3">
            <Controller
              control={control}
              name="dueDate"
              render={({ field }) => (
                <>
                  <Label htmlFor="dueDate">Data de Vencimento</Label>
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
          </div>

          <div className="grid gap-3">
            <Controller
              control={control}
              name="priority"
              render={({ field }) => (
                <>
                  <Label htmlFor="priority">Prioridade</Label>
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
                </>
              )}
            />
          </div>

          <div className="grid gap-3">
            <Controller
              control={control}
              name="users"
              render={({ field }) => (
                <>
                  <Label htmlFor="users">Usuários </Label>
                  <Select
                    isMulti
                    options={getAllUsers.data?.map(
                      (user: { id: any; name: any }) => ({
                        value: user.id,
                        label: user.name,
                      })
                    )}
                    placeholder="Selecione os usuários"
                    onChange={(selected) =>
                      field.onChange(selected.map((s) => s.value))
                    }
                    value={getAllUsers.data
                      ?.filter((u: { id: string }) =>
                        field.value?.includes(u.id)
                      )
                      .map((u: { id: any; name: any }) => ({
                        value: u.id,
                        label: u.name,
                      }))}
                    className="text-sm border-gray-100 focus:border-gray-100"
                  />
                </>
              )}
            />
          </div>

          <div className="grid gap-3">
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <>
                  <Label htmlFor="status">Status </Label>
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
                </>
              )}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <BaseButton
            onClick={handleSubmit(handleAddTask)}
            type="submit"
            loading={loading}
            title="Cadastrar"
            className=" bg-[#7ae01a] cursor-pointer hover:bg-[#9fe65d]"
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

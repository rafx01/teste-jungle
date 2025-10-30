// components/ui/AddTaskModal.tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BaseInput } from "../BaseInput/BaseInput";
import { BaseTextArea } from "../BaseTextArea/BaseTextArea";

type AddTaskModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AddTaskModal({ open, onOpenChange }: AddTaskModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar Nova Tarefa</DialogTitle>
            <DialogDescription>
              Preencha os dados da tarefa. Clique em salvar quando terminar.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Título</Label>
              <BaseInput
                id="title"
                name="title"
                placeholder="Digite o título da tarefa"
              />
              {/* <Input
                id="title"
                name="title"
                placeholder="Digite o título da tarefa"
                required
              /> */}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Descrição</Label>
              <BaseTextArea error="" placeholder="Digite a descrição aqui" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="dueDate">Data de Vencimento</Label>
              <Input id="dueDate" name="dueDate" type="date" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="priority">Prioridade</Label>
              <select
                id="priority"
                name="priority"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="low">Baixa</option>
                <option value="medium">Média</option>
                <option value="high">Alta</option>
                <option value="urgent">Urgente</option>
              </select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="users">Usuários </Label>
              <select
                id="users"
                name="users"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="low">Baixa</option>
                <option value="medium">Média</option>
                <option value="high">Alta</option>
                <option value="urgent">Urgente</option>
              </select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Salvar Tarefa</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

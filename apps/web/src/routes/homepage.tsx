import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useGetAllTasks } from "@/hooks/task/useGetAllTasks";
import { Header } from "@/components/Header";
import { AddTaskModal } from "@/components/ui/AddTaskModal/AddTaskModal";
import { BaseInput } from "@/components/ui/BaseInput/BaseInput";
import { BaseDropdown } from "@/components/ui/BaseDropdown/BaseDropdown";
import { SkeletonCard } from "@/components/ui/SkeletonCard/SkeletonCard";
import { TaskCard } from "@/components/ui/TaskCard/TaskCard";
import { useTaskStore } from "@/stores/taskStore";
import { TaskModal } from "@/components/ui/TaskModal/TaskModal";
import type { TaskProps } from "@/types/task";
import { PaginationComponent } from "@/components/ui/Pagination/Pagination";

export const Route = createFileRoute("/homepage")({
  component: HomePage,
});

function FloatingButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-5 bg-[#7ae01a] cursor-pointer hover:bg-[#7ae01a]/80 rounded-full right-5 shadow-lg transition-transform hover:scale-110"
    >
      <p className="text-white py-4 px-6 text-2xl">+</p>
    </button>
  );
}

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [order, SetOrder] = useState<"ASC" | "DESC">("DESC");
  const [itensPerPage, setItensPerPage] = useState(5);
  const [status, setStatus] = useState<
    "ALL" | "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE"
  >("ALL");

  const getAllTasks = useGetAllTasks({
    order: order,
    limit: itensPerPage,
    orderByStatus: status,
  });

  const { openTaskModal } = useTaskStore();

  return (
    <div className="min-h-screen w-full">
      <Header />
      <TaskModal />
      <AddTaskModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      <div className="px-10 pt-4">
        <div className=" flex justify-center">
          <div className="space-x-2  flex-row flex">
            <BaseInput placeholder="Buscar" className="w-96 bg-white" />
            <BaseDropdown
              trigger={<p className="text-xs">Itens por página</p>}
              items={[
                { label: "5", onClick: () => setItensPerPage(5) },
                { label: "10", onClick: () => setItensPerPage(10) },
                { label: "15", onClick: () => setItensPerPage(15) },
                { label: "20", onClick: () => setItensPerPage(20) },
              ]}
            />
            <BaseDropdown
              trigger={<p className="text-xs">Status</p>}
              items={[
                { label: "Todos", onClick: () => {} },
                { label: "A fazer", onClick: () => setStatus("TODO") },
                { label: "Em progresso", onClick: () => {} },
                { label: "Em revisão", onClick: () => {} },
                { label: "Concluído", onClick: () => {} },
              ]}
            />
            <BaseDropdown
              trigger={<p className="text-xs">Ordenar por</p>}
              items={[
                { label: "Mais recentes", onClick: () => SetOrder("DESC") },
                { label: "Mais antigas", onClick: () => SetOrder("ASC") },
              ]}
            />
          </div>
        </div>

        <div>
          {getAllTasks.isLoading || getAllTasks.isFetching ? (
            <div className="pt-10 flex flex-wrap gap-10">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : (
            <div className="pt-10  flex flex-wrap gap-10">
              {getAllTasks?.data?.map((task: TaskProps) => (
                <TaskCard
                  key={task.id}
                  description={task.description}
                  dueDate={task.dueDate}
                  priority={task.priority}
                  title={task.title}
                  users={task.users}
                  status={task.status}
                  onClick={() => openTaskModal(task.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white py-3 shadow-md">
        <PaginationComponent />
      </div>

      <FloatingButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
}

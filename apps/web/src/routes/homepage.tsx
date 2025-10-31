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

  const getAllTasks = useGetAllTasks();

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
                { label: "10", onClick: () => {} },
                { label: "15", onClick: () => {} },
              ]}
            />
            <BaseDropdown
              trigger={<p className="text-xs">Ordenar por</p>}
              items={[
                { label: "10", onClick: () => {} },
                { label: "15", onClick: () => {} },
              ]}
            />
            <BaseDropdown
              trigger={<p className="text-xs">Status</p>}
              items={[
                { label: "10", onClick: () => {} },
                { label: "15", onClick: () => {} },
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
      <FloatingButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
}

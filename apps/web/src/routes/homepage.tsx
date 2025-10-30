import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../../components/Header";
import { TaskCard } from "../../components/ui/TaskCard/TaskCard";
import { useGetAllTasks } from "@/hooks/task/useGetAllTasks";
import { AddTaskModal } from "../../components/ui/AddTaskModal/AddTaskModal";
import { SkeletonCard } from "../../components/ui/SkeletonCard/SkeletonCard";

export const Route = createFileRoute("/homepage")({
  component: HomePage,
});

type TaskProps = {
  title: string;
  dueDate: Date;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  description: string;
};

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

  let alo = true;

  return (
    <div className="min-h-screen w-full">
      <Header />

      <AddTaskModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      <div className="px-10">
        {getAllTasks.isLoading || getAllTasks.isFetching ? (
          <div className="pt-10 flex flex-wrap gap-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="pt-10  flex flex-wrap gap-10">
            {getAllTasks?.data?.map(
              ({ title, dueDate, priority, description }: TaskProps) => (
                <TaskCard
                  key={title}
                  description={description}
                  dueDate={dueDate}
                  priority={priority}
                  title={title}
                  users={[]}
                  //users={users}
                />
              )
            )}
          </div>
        )}
      </div>

      <FloatingButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
}

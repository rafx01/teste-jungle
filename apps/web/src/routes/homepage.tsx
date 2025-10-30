import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../../components/Header";
import { mockTasks } from "../../constants";
import { TaskCard } from "../../components/ui/TaskCard";
import { useGetAllTasks } from "@/hooks/task/useGetAllTasks";
import { AddTaskModal } from "../../components/ui/AddTaskModal";

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

  return (
    <div className="min-h-screen w-full">
      <Header />

      <AddTaskModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      <div className="pt-10 justify-center flex flex-wrap gap-10">
        {mockTasks.map(({ description, dueDate, priority, title, users }) => (
          <TaskCard
            key={title}
            description={description}
            dueDate={dueDate}
            priority={priority}
            title={title}
            users={users}
          />
        ))}
      </div>

      <FloatingButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
}

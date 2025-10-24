import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { mockTasks } from "../../constants";
import { TaskCard } from "../../components/ui/TaskCard";

export const Route = createFileRoute("/homepage")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen  w-full">
      <Header />

      <div className="pt-10 justify-center  flex  flex-wrap gap-10">
        {mockTasks.map(({ description, dueDate, priority, title, users }) => (
          <TaskCard
            description={description}
            dueDate={dueDate}
            priority={priority}
            title={title}
            users={users}
          />
        ))}
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { TaskCard } from "../../components/ui/TaskCard";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex overflow-hidden h-full mt-10">
      <TaskCard
        priority="urgent"
        dueDate="2023-01-01"
        title="Task 1"
        users={["User 1", "User 2"]}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sapien, porttitor vitae ultrices a, vestibulum a ligula. Quisque blandit massa at nisl consectetur venenatis vel id ipsum. Integer ac consequat diam. Mauris tortor tellus, ornare sed arcu vitae, feugiat suscipit neque. Aliquam volutpat nisi vel nibh sagittis semper"
      />
    </div>
  );
}

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type props = {
  taskId: string | null;
  title: string;
  description: string;
  dueDate: Date;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  status: "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
  //users: string[];
};

export function usePutUpdateTaskById() {
  return useMutation({
    mutationKey: ["updateTaskById"],
    mutationFn: async ({
      description,
      dueDate,
      priority,
      status,
      title,
      //users,
      taskId,
    }: props) => {
      const { data } = await axios.put(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/tasks/${taskId}`,
        {
          description,
          dueDate,
          priority,
          status,
          title,
          //users,
        }
      );
      return data;
    },
  });
}

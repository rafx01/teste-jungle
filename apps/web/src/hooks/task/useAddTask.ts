import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type props = {
  title: string;
  description: string;
  dueDate: Date;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  status: "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
  users: string[];
};

export function usePostAddTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addTask"],
    mutationFn: async ({
      description,
      dueDate,
      priority,
      status,
      title,
      users,
    }: props) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/tasks`,
        {
          description,
          dueDate,
          priority,
          status,
          title,
          users,
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllTasks"] });
    },
  });
}

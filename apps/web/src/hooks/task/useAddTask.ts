import { useMutation } from "@tanstack/react-query";
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
      console.log(users);

      const { data } = await axios.post(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/api/tasks`,
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
  });
}

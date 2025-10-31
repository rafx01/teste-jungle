import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useDeleteTaskById({ taskId }: { taskId: string | null }) {
  return useMutation({
    mutationKey: ["getTaskById", taskId],
    mutationFn: async () => {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/api/tasks/${taskId}`
      );
      return data;
    },
  });
}

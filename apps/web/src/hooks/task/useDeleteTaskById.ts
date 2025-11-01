import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useDeleteTaskById() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteTaskById"],
    mutationFn: async ({ taskId }: { taskId: string | null }) => {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/api/tasks/${taskId}`
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllTasks"] });
    },
  });
}

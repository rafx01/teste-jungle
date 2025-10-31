import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetTaskById({ taskId }: { taskId: string | null }) {
  return useQuery({
    queryKey: ["getTaskById", taskId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/api/tasks/${taskId}`
      );
      return data;
    },
    enabled: !!taskId,
  });
}

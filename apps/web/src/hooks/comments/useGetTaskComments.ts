import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetTaskComments({ taskId }: { taskId: string | null }) {
  return useQuery({
    queryKey: ["getTaskComments", taskId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/comments/${taskId}`
      );
      return data;
    },
    enabled: !!taskId,
  });
}

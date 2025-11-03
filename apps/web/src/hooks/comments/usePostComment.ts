import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type props = {
  text: string;
  taskId: string;
  userId: string;
};

export function usePostComment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addComment"],
    mutationFn: async ({ text, taskId, userId }: props) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/comments`,
        {
          text,
          taskId,
          userId,
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTaskComments"] });
    },
  });
}

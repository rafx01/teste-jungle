import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface GetAllTasksParams {
  page?: number;
  limit?: number;
  order?: "ASC" | "DESC";
  orderByStatus?: "ALL" | "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
  title?: string;
}

export function useGetAllTasks(params: GetAllTasksParams = {}) {
  const {
    page = 1,
    limit = 10,
    order = "DESC",
    orderByStatus = "ALL",
    title,
  } = params;

  return useQuery({
    queryKey: ["getAllTasks", page, limit, order, orderByStatus, title],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/tasks?page=${page}&limit=${limit}&order=${order}&orderByStatus=${orderByStatus}`,
        {
          params: {
            title,
          },
        }
      );
      return data.data;
    },
  });
}

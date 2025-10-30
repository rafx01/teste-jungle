import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface GetAllTasksParams {
  page?: number;
  limit?: number;
  order?: "ASC" | "DESC";
  orderBy?: string;
}

export function useGetAllTasks(params: GetAllTasksParams = {}) {
  const {
    page = 1,
    limit = 10,
    order = "DESC",
    orderBy = "createdAt",
  } = params;

  return useQuery({
    queryKey: ["getAllTasks", page, limit, order, orderBy],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/api/tasks?page=${page}&limit=${limit}&order=${order}&orderBy=${orderBy}`
      );
      return data.data;
    },
  });
}

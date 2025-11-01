import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface GetAllTasksParams {
  page?: number;
  limit?: number;
  order?: "ASC" | "DESC";
  orderByStatus?: "ALL" | "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
}

export function useGetAllTasks(params: GetAllTasksParams = {}) {
  const {
    page = 1,
    limit = 10,
    order = "DESC",
    orderByStatus = "ALL",
  } = params;

  return useQuery({
    queryKey: ["getAllTasks", page, limit, order, orderByStatus],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_TASKS_API_BASEURL}/api/tasks?page=${page}&limit=${limit}&order=${order}&orderByStatus=${orderByStatus}`
      );
      return data.data;
    },
  });
}

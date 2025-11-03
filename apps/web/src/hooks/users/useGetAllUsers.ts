import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetAllUsers() {
  return useQuery({
    queryKey: ["getAllUsers"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_AUTH_API_BASEURL}/users`
      );
      return data;
    },
  });
}

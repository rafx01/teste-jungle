import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function usePostLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_AUTH_API_BASEURL}/api/auth/login`
      );
      return data;
    },
  });
}

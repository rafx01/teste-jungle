import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type props = {
  email: string;
  password: string;
};

export function usePostLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password }: props) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_AUTH_API_BASEURL}/auth/login`,
        {
          email,
          password,
        }
      );
      return data;
    },
  });
}

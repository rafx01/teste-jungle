import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type props = {
  email: string;
  password: string;
  name: string;
  nick: string;
};

export function usePostRegister() {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async ({ email, password, name, nick }: props) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_AUTH_API_BASEURL}/auth/register`,
        {
          email,
          password,
          name,
          nick,
        }
      );
      return data;
    },
  });
}

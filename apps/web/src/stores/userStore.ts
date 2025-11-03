import { create } from "zustand";

type UserStore = {
  userId: string;
  email: string;
  name: string;
  nick: string;

  setUserId: (userId: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  userId: "",
  email: "",
  name: "",
  nick: "",

  setUserId: (userId: string) => set({ userId }),
  setEmail: (email: string) => set({ email }),
  setName: (name: string) => set({ name }),
  setNick: (nick: string) => set({ nick }),
}));

import { create } from "zustand";

type TaskStore = {
  selectedTaskId: string | null;
  isViewModalOpen: boolean;
  openTaskModal: (taskId: string) => void;
  closeTaskModal: () => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  selectedTaskId: null,
  isViewModalOpen: false,
  openTaskModal: (taskId) =>
    set({ selectedTaskId: taskId, isViewModalOpen: true }),
  closeTaskModal: () => set({ selectedTaskId: null, isViewModalOpen: false }),
}));

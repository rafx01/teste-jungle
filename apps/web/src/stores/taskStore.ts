import { create } from "zustand";

type Task = {
  title: string;
  description: string;
  dueDate: string | Date;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  status: "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
  users: string[];
};

type TaskStore = {
  selectedTask: Task | null;
  isViewModalOpen: boolean;
  setSelectedTask: (task: Task | null) => void;
  openTaskModal: (task: Task) => void;
  closeTaskModal: () => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  selectedTask: null,
  isViewModalOpen: false,
  setSelectedTask: (task) => set({ selectedTask: task }),
  openTaskModal: (task) => set({ selectedTask: task, isViewModalOpen: true }),
  closeTaskModal: () => set({ selectedTask: null, isViewModalOpen: false }),
}));

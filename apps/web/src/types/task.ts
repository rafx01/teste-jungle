export type TaskProps = {
  id: string;
  title: string;
  dueDate: Date;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  description: string;
  status: "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
  users: string[];
};

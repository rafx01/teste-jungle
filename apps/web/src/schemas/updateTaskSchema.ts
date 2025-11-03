import * as z from "zod";

export const updateTaskSchema = z.object({
  title: z.string().trim(),
  description: z.string().trim(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]),
  dueDate: z.string({}),
  users: z.array(z.string()),
  status: z.enum(["TODO", "IN_PROGRESS", "REVIEW", "DONE"]),
});

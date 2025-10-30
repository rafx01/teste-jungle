import * as z from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "O campo precisa ser do tipo texto",
    })
    .min(1, "Campo obrigatório")
    .trim(),
  description: z
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "O campo precisa ser do tipo texto",
    })
    .min(1, "Campo obrigatório")
    .trim(),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  dueDate: z.string({}),
  assignedUsers: z.array(z.string()),
});

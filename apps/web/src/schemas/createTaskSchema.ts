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
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]),
  dueDate: z.string({}),
  users: z.array(z.string()),
  status: z.enum(["TODO", "IN_PROGRESS", "REVIEW", "DONE"]),
});

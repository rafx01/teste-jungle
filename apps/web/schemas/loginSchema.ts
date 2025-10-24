import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "O campo precisa ser do tipo texto",
    })
    .trim()
    .email("O campo precisa ser preenchido com um email"),
  password: z
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "O campo precisa ser do tipo texto",
    })
    .min(1, "Campo obrigatório")
    .trim(),
});

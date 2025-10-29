import * as z from "zod";

export const registerSchema = z
  .object({
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
    confirmPassword: z.string().min(1, "Campo obrigatório").trim(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas devem coincidir!",
        path: ["confirmPassword"],
      });
    }
  });

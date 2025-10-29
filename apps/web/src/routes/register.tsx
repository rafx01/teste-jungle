import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BaseInput } from "../../components/ui/BaseInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as Zod from "zod";
import { BaseButton } from "../../components/ui/BaseButton";
import { registerSchema } from "../../schemas/registerSchema";
import { FaArrowLeft } from "react-icons/fa";
import { usePostRegister } from "@/hooks/auth/usePostRegister";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Zod.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const PostRegister = usePostRegister();

  const navigate = useNavigate();

  async function handleLogin(data: Zod.infer<typeof registerSchema>) {
    try {
      PostRegister.mutateAsync({
        email: data.email,
        password: data.password,
        name: data.name,
        nick: data.nick,
      });

      navigate({ to: "/homepage" });
    } catch (error) {}
  }

  return (
    <div className="flex min-h-screen flex-col space-y-4 items-center justify-center">
      <form className="space-y-4 w-96">
        <a
          href="/"
          className="flex justify-start  flex-row items-center space-x-2"
        >
          <FaArrowLeft />

          <p>Voltar</p>
        </a>
        <h1 className="text-2xl font-bold">Registro</h1>

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <BaseInput
              error={errors.email?.message}
              {...field}
              placeholder="Email"
              type="email"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <BaseInput
              error={errors.password?.message}
              {...field}
              placeholder="Senha"
              type="password"
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <BaseInput
              error={errors.confirmPassword?.message}
              {...field}
              placeholder="Confirme sua senha"
              type="password"
            />
          )}
        />
        <BaseButton
          onClick={handleSubmit(handleLogin)}
          type="submit"
          title="Cadastrar"
          className="w-full bg-[#7ae01a] hover:bg-[#9fe65d]"
        />
      </form>
    </div>
  );
}

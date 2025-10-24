import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BaseInput } from "../../components/ui/BaseInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as Zod from "zod";
import { loginSchema } from "../../schemas/loginSchema";
import { BaseButton } from "../../components/ui/BaseButton";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  async function handleLogin(data: Zod.infer<typeof loginSchema>) {
    try {
      console.log("data", data);

      navigate({ to: "/homepage" });
    } catch (error) {}
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form className="space-y-4 w-96">
        <h1 className="text-2xl font-bold">Login</h1>

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <BaseInput
              error={errors.email?.message}
              {...field}
              placeholder="email"
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
              placeholder="senha"
              type="password"
            />
          )}
        />

        <BaseButton
          onClick={handleSubmit(handleLogin)}
          type="submit"
          title="Entrar"
          className="w-full bg-[#7ae01a] hover:bg-[#9fe65d]"
        />
      </form>
    </div>
  );
}

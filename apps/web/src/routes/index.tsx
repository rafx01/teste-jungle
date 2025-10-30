import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BaseInput } from "../../components/ui/BaseInput/BaseInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as Zod from "zod";
import { loginSchema } from "../../schemas/loginSchema";
import { BaseButton } from "../../components/ui/BaseButton/BaseButton";
import { usePostLogin } from "@/hooks/auth/usePostLogin";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

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

  const postLogin = usePostLogin();

  async function handleLogin(data: Zod.infer<typeof loginSchema>) {
    try {
      setIsLoading(true);
      console.log(1);

      // const response = await postLogin.mutateAsync({
      //   email: data.email,
      //   password: data.password,
      // });
      // console.log(response);

      navigate({ to: "/homepage" });
      console.log(3);

      setIsLoading(false);
      console.log(4);

      toast.success("Usuário cadastrado com sucesso!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Falha ao cadastrar usuário!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <div className="flex min-h-screen flex-col space-y-4 items-center justify-center">
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
          disabled={isLoading}
          loading={isLoading}
          className="w-full bg-[#7ae01a] hover:bg-[#9fe65d]"
        />
      </form>
      <div className="flex flex-row space-x-2">
        <p>Ainda não possui uma conta? </p>
        <a href="/register" className="text-[#7ae01a] font-bold">
          Cadastre-se
        </a>
      </div>
    </div>
  );
}

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as Zod from "zod";
import { registerSchema } from "../schemas/registerSchema";
import { FaArrowLeft } from "react-icons/fa";
import { usePostRegister } from "@/hooks/auth/usePostRegister";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { BaseInput } from "@/components/ui/BaseInput/BaseInput";
import { BaseButton } from "@/components/ui/BaseButton/BaseButton";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Zod.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      nick: "",
    },
  });

  const postRegister = usePostRegister();

  const navigate = useNavigate();

  async function handleRegister(data: Zod.infer<typeof registerSchema>) {
    try {
      setIsLoading(true);

      await postRegister.mutateAsync({
        email: data.email,
        password: data.password,
        name: data.name,
        nick: data.nick,
      });

      navigate({ to: "/" });

      setIsLoading(false);
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
          name="name"
          render={({ field }) => (
            <BaseInput
              error={errors.name?.message}
              {...field}
              placeholder="Nome completo"
              type="text"
            />
          )}
        />

        <Controller
          control={control}
          name="nick"
          render={({ field }) => (
            <BaseInput
              error={errors.nick?.message}
              {...field}
              placeholder="Apelido"
              type="text"
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
          onClick={handleSubmit(handleRegister)}
          type="submit"
          loading={isLoading}
          title="Cadastrar"
          className="w-full bg-[#7ae01a] hover:bg-[#9fe65d]"
        />
      </form>
    </div>
  );
}

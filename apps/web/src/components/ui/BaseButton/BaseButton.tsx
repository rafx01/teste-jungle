import { Button } from "@/shadcn/ui/button";
import type { ReactNode } from "react";
import { Loading } from "../Loading/Loading";

type BaseButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  title: string;
  icon?: ReactNode;
  variant?: "default" | "destructive" | "outline";
} & React.ComponentProps<"button">;

export function BaseButton({
  loading,
  disabled,
  onClick,
  title,
  icon,
  variant = "outline",
  ...props
}: BaseButtonProps) {
  return (
    <Button
      variant={variant}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {title}
      {loading && <Loading />}
    </Button>
  );
}

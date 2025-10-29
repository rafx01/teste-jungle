import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { Loading } from "./Loading";

type BaseButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  title: string;
  icon?: ReactNode;
} & React.ComponentProps<"button">;

export function BaseButton({
  loading,
  disabled,
  onClick,
  title,
  icon,
  ...props
}: BaseButtonProps) {
  return (
    <Button
      variant="default"
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {title}
      {loading && <Loading />}
    </Button>
  );
}

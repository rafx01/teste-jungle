import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

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
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button
        variant="default"
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {title}
      </Button>
    </div>
  );
}

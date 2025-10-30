import { Button } from "@/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import type { ReactNode } from "react";

interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  variant?: "default" | "destructive";
}

interface BaseDropdownProps {
  trigger: ReactNode;
  label?: string;
  items: DropdownItem[];
  showSeparator?: boolean;
}

export function BaseDropdown({
  trigger,
  label,
  items,
  showSeparator = false,
}: BaseDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{trigger}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {showSeparator && <DropdownMenuSeparator />}
          </>
        )}
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            className={item.variant === "destructive" ? "text-red-600" : ""}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

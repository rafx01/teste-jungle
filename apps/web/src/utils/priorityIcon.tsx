import type { ReactNode } from "react";
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";

type PriorityProps = {
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
};

export function priorityIcon({ priority }: PriorityProps) {
  let content: ReactNode = "";

  switch (priority) {
    case "LOW":
      content = (
        <div className="flex items-center gap-2">
          <FcLowPriority size={32} />
          <span className="font-medium">Baixa</span>
        </div>
      );
      break;
    case "MEDIUM":
      content = (
        <div className="flex items-center gap-2">
          <FcMediumPriority size={32} />
          <span className="font-medium">Média</span>
        </div>
      );
      break;
    case "HIGH":
      content = (
        <div className="flex items-center gap-2">
          <FcHighPriority size={32} />
          <span className="font-medium">Alta</span>
        </div>
      );
      break;
    case "URGENT":
      content = (
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <FcHighPriority size={32} />
            <FcHighPriority size={32} />
          </div>
          <span className="font-medium">Urgente</span>
        </div>
      );
      break;
  }

  return content;
}

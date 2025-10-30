import type { ReactNode } from "react";
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";

type props = {
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  dueDate: Date | string;
  users: string[];
  onClick?: () => void;
  status?: string;
};

export function TaskCard({
  users,
  onClick,
  status,
  priority,
  description,
  title,
  dueDate,
}: props) {
  let priorityIcon: ReactNode = "";

  switch (priority) {
    case "LOW":
      priorityIcon = <FcLowPriority size={26} />;
      break;
    case "MEDIUM":
      priorityIcon = <FcMediumPriority size={26} />;
      break;
    case "HIGH":
      priorityIcon = <FcHighPriority size={26} />;
      break;
    case "URGENT":
      priorityIcon = (
        <div className="flex flex-row gap-1">
          <FcHighPriority size={26} />
          <FcHighPriority size={26} />
        </div>
      );
      break;
  }

  return (
    <div
      onClick={onClick}
      className="w-80 h-80 p-4 bg-gray-200 rounded-md flex flex-col justify-between"
    >
      <div>
        <div className="flex flex-row items-center gap-4">
          <div className="rounded-full bg-red-100 h-14 w-14" />
          <div>
            <p className="text-lg font-medium">{title}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg text-justify font-medium overflow-clip">
            {(() => {
              const words = description.split(" ");
              const limitedText =
                words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
              return limitedText;
            })()}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div>{priorityIcon}</div>
        <div>
          <p>{dueDate.toLocaleString("pt-BR")}</p>
        </div>
      </div>
    </div>
  );
}

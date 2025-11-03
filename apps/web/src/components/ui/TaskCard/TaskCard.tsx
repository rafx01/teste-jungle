import type { ReactNode } from "react";
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "@/shadcn/ui/avatar";
import { statusLabel } from "@/utils/statusLabel";

type props = {
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  dueDate: Date;
  users: string[];
  onClick?: () => void;
  status: "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
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
  let formattedStatus = "";

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

  switch (status) {
    case "TODO":
      formattedStatus = "Pendente";
      break;

    case "IN_PROGRESS":
      formattedStatus = "Em andamento";
      break;

    case "REVIEW":
      formattedStatus = "Em revisão";
      break;

    case "DONE":
      formattedStatus = "Concluído";
      break;
  }

  const formattedDate = dueDate
    ? new Date(dueDate).toLocaleDateString("pt-BR")
    : "Sem data";

  console.log("users:::::", users);

  return (
    <div
      onClick={onClick}
      className="w-80 h-80 p-4 cursor-pointer bg-gray-200 rounded-md flex flex-col justify-between"
    >
      <div>
        <div className="flex flex-row items-center gap-4">
          <div>
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
          <div>
            <p className="text-sm font-medium">{title}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-md text-justify font-medium overflow-clip">
            {(() => {
              const words = description.split(" ");
              const limitedText =
                words.slice(0, 40).join(" ") + (words.length > 40 ? "..." : "");
              return limitedText;
            })()}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div>{priorityIcon}</div>
        <div>{statusLabel({ status })}</div>
        <div>
          <p className="text-sm">Prazo: {formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";

type props = {
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "urgent";
  dueDate: string;
  users: string[];
};

export function TaskCard({ priority, description, title, dueDate }: props) {
  let priorityIcon: ReactNode = "";

  switch (priority) {
    case "low":
      priorityIcon = <FcLowPriority size={26} />;
      break;
    case "medium":
      priorityIcon = <FcMediumPriority size={26} />;
      break;
    case "high":
      priorityIcon = <FcHighPriority size={26} />;
      break;
    case "urgent":
      priorityIcon = (
        <div className="flex flex-row gap-1">
          <FcHighPriority size={26} />
          <FcHighPriority size={26} />
        </div>
      );
      break;
  }

  return (
    <div className="w-80 h-80 p-4 bg-gray-200 rounded-md">
      <div className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-red-100 h-14 w-14"></div>
        <div>
          <p className="text-lg font-medium ">{title}</p>
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
      <div className="flex flex-row pt-4 justify-between">
        <div>{priorityIcon}</div>
        <div>
          <p>{dueDate}</p>
        </div>
      </div>
    </div>
  );
}

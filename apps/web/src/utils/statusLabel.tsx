import type { ReactNode } from "react";

type props = {
  status: "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
};

export function statusLabel({ status }: props) {
  let label: ReactNode = "";
  switch (status) {
    case "TODO":
      label = (
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-300 text-gray-800">
          A Fazer
        </span>
      );
      break;
    case "IN_PROGRESS":
      label = (
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-200 text-blue-800">
          Em Progresso
        </span>
      );
      break;
    case "REVIEW":
      label = (
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-200 text-yellow-800">
          Em Revisão
        </span>
      );
      break;
    case "DONE":
      label = (
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-200 text-green-800">
          Concluído
        </span>
      );
      break;
  }

  return label;
}

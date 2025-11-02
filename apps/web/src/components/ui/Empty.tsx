import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shadcn/ui/empty";
import { SiLazyvim } from "react-icons/si";

export function EmptyComponent() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SiLazyvim />
        </EmptyMedia>
        <EmptyTitle>Nada por aqui...</EmptyTitle>
        <EmptyDescription>Adicione sua primeira tarefa!</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2"></div>
      </EmptyContent>
    </Empty>
  );
}

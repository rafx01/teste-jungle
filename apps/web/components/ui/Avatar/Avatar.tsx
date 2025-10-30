import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BaseDropdown } from "../BaseDropdown/BaseDropdown";

export function BaseAvatar({ onClick }: { onClick?: () => void }) {
  return (
    <BaseDropdown
      trigger={
        <Avatar onClick={onClick} className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      }
      items={[
        { label: "10", onClick: () => {} },
        { label: "15", onClick: () => {} },
      ]}
    />
  );
}

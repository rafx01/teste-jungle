import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BaseAvatar({ onClick }: { onClick?: () => void }) {
  return (
    <Avatar onClick={onClick} className="w-12 h-12">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

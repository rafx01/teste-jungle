type props = {
  user: string;
  text: string;
};

export function Comment({ user, text }: props) {
  return (
    <div className="w-full border border-slate-200 rounded-md p-2 space-x-4 flex items-center">
      <div className="bg-gray-500 rounded-full h-8 w-8 flex items-center justify-center">
        {user.slice(0, 1)}
      </div>
      <div className="flex flex-col space-y-1">
        <div className="text-xs">{user}</div>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
}

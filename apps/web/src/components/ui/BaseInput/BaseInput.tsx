import { Input } from "@/shadcn/ui/input";

type InputProps = {
  placeholder?: string;
  error?: string;
} & React.ComponentProps<"input">;

export function BaseInput({ placeholder, error, ...props }: InputProps) {
  return (
    <>
      <div className={error && "border rounded-lg border-red-500"}>
        <Input {...props} type={props.type} placeholder={placeholder} />
      </div>
      {error && <p className="text-red-500 text-sm ">{error}</p>}
    </>
  );
}

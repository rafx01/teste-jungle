import { Input } from "@/components/ui/input";

type InputProps = {
  type?: string;
  placeholder?: string;
  error?: string;
} & React.ComponentProps<"input">;

export function BaseInput({ type, placeholder, error, ...props }: InputProps) {
  return (
    <>
      <div className={error && "border rounded-lg border-red-500"}>
        <Input {...props} type={type} placeholder={placeholder} />
      </div>
      {error && <p className="text-red-500 text-sm ">{error}</p>}
    </>
  );
}

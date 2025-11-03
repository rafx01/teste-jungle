import { Textarea } from "@/shadcn/ui/textarea";

type props = {
  placeholder?: string;
  error?: string;
  value?: string;
};

export function BaseTextArea({ placeholder, error, value, ...props }: props) {
  return (
    <>
      <div className={error && "border rounded-lg border-red-500"}>
        <Textarea {...props} value={value} placeholder={placeholder} />
      </div>
      {error && <p className="text-red-500 text-sm ">{error}</p>}
    </>
  );
}

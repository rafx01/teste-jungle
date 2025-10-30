import { Textarea } from "@/shadcn/ui/textarea";

type props = {
  placeholder?: string;
  error?: string;
};

export function BaseTextArea({ placeholder, error, ...props }: props) {
  return (
    <>
      <div className={error && "border rounded-lg border-red-500"}>
        <Textarea {...props} placeholder={placeholder} />
      </div>
      {error && <p className="text-red-500 text-sm ">{error}</p>}
    </>
  );
}

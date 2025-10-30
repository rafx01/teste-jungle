import { Textarea } from "@/components/ui/textarea";

type props = {
  placeholder?: string;
  error?: string;
};

export function BaseTextArea({ placeholder, error }: props) {
  return (
    <>
      <div className={error && "border rounded-lg border-red-500"}>
        <Textarea placeholder={placeholder} />
      </div>
      {error && <p className="text-red-500 text-sm ">{error}</p>}
    </>
  );
}

import { BaseAvatar } from "./ui/Avatar/Avatar";
import { BaseDropdown } from "./ui/BaseDropdown/BaseDropdown";
import { BaseInput } from "./ui/BaseInput/BaseInput";

export function Header() {
  return (
    <header className="flex px-10 h-20 w-full bg-[#7ae01a]">
      <div className=" w-full items-center flex justify-end ">
        {/* <div className="space-x-2  flex-row flex">
          <BaseInput placeholder="Buscar" className="w-96 bg-white" />
          <BaseDropdown
            trigger={<p className="text-xs">Itens por página</p>}
            items={[
              { label: "10", onClick: () => {} },
              { label: "15", onClick: () => {} },
            ]}
          />
          <BaseDropdown
            trigger={<p className="text-xs">Ordenar por</p>}
            items={[
              { label: "10", onClick: () => {} },
              { label: "15", onClick: () => {} },
            ]}
          />
        </div> */}
        <BaseAvatar />
      </div>
    </header>
  );
}

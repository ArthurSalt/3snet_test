import type { RenderTabProps } from "../../../types/types";
import { ChevronIcon } from "../icons";


export const NavTab = ({ label, isActive }: RenderTabProps) => (
  <>
    <p className="text-[#2D3748] font-semibold">{label}</p>
    {isActive && (
      <>
        <ChevronIcon className="absolute bottom-3 left-1/2 -translate-x-1/2 border-[#40F3F7]" />
        <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#40F3F7]" />
      </>
    )}
  </>
)

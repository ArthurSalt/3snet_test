import type { RenderTabProps } from '../../../types/types';

export const TableTab = ({ label, isActive }: RenderTabProps) => (
  <>
    <p className={`${isActive ? 'text-[#2D3748]' : ''} font-semibold`}>{label}</p>
    {isActive && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#2D3748]" />}
  </>
);

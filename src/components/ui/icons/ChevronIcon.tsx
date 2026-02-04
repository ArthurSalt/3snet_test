type ChevronProps = {
  className?: string;
};

export const ChevronIcon = ({ className }: ChevronProps) => (
  <div className={`w-1 h-1 border-r-2 border-b-2 rotate-45 border-[#4F669D] ${className ?? ''}`} />
);

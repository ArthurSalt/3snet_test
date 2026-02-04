import React from 'react';

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  value: number | string | null;
  isPrice?: boolean;
}

export const TableCell: React.FC<TableCellProps> = ({ value, isPrice, className, ...props }) => {
  return (
    <td
      className={`pl-4 py-3 text-left font-medium text-sm text-nowrap ${className ?? ''}`}
      {...props}
    >
      {isPrice ? `$ ${value}` : value}
    </td>
  );
};

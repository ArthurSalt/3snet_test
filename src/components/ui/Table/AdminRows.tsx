import { Fragment } from 'react';
import type { Admin } from '../../../types';
import { TableCell } from './TableCell';

type AdminRowsProps = {
  months: number[];
  admin: Admin;
};

export const AdminRows = ({ admin, months }: AdminRowsProps) => (
  <>
    <tr className="text-[#A6B1B9] font-semibold text-left font-['Roboto'] text-sm">
      <td
        rowSpan={2}
        className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50 text-[#4F669D]"
      >
        {admin.adminName}
      </td>
      <td className="border border-gray-300 px-4 py-3">Income:</td>

      {months.map(m => {
        const month = admin.months[m];
        if (!month) {
          return (
            <TableCell
              key={m}
              colSpan={2}
              rowSpan={2}
              value="No data"
              className="border border-gray-300 px-4 py-3 text-center text-gray-400 text-sm"
            />
          );
        }

        return (
          <Fragment key={m}>
            <TableCell value={month.plan.income} isPrice className="border-t border-gray-300" />
            <TableCell
              value={month.fact.income}
              isPrice
              className="border-r border-t border-gray-300"
            />
          </Fragment>
        );
      })}
      <td rowSpan={2} className="w-[40px] border-b border-gray-300 text-center">
        ...
      </td>
    </tr>

    <tr className="text-[#A6B1B9] font-semibold text-left font-['Roboto'] text-sm">
      <td className="border border-gray-300 px-4 py-3">Active partners:</td>

      {months.map(m => {
        const month = admin.months[m];
        if (!month) return null;

        return (
          <Fragment key={m}>
            <TableCell value={month.plan.activePartners} />
            <TableCell value={month.fact.activePartners} className="border-r border-gray-300" />
          </Fragment>
        );
      })}
    </tr>
  </>
);

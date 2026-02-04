import React, { Fragment } from "react";
import { TableCell } from "./TableCell";
import type { TotalMonthData } from "../../../types";

type TotalRowsProps = {
  months: number[];
  data: TotalMonthData[];
};

export const TotalRows = ({ months, data }: TotalRowsProps) => (
  <>
    <tr className="text-[#A6B1B9] font-semibold text-left font-['Roboto'] text-sm">
      <td
        rowSpan={2}
        className="border border-gray-300 px-4 py-3 font-semibold min-w-[156px] min-h-[56px] text-[#4F669D]"
      >
        Manager
      </td>
      <td className="border border-gray-300 px-2 py-3 font-medium text-sm min-w-[156px] text-[#4F669D]">
        Total income:
      </td>

      {months.map(m => {
        const month = data[m];

        if (!month) {
          return (
            <TableCell
              key={m}
              colSpan={2}
              rowSpan={2}
              value="No data"
              className="border border-gray-300 px-4 py-3 text-center text-gray-400 text-sm"
            />
          )
        }

        return (
          <Fragment key={m}>
            <TableCell value={month.plan.income} isPrice />
            <TableCell
              value={month.fact.income}
              isPrice
              className="border-r border-gray-300"
            />
          </Fragment>
        );
      })}
      <td rowSpan={2} className="w-[40px] border-b border-gray-300"/>
    </tr>

    <tr className="text-[#A6B1B9] font-semibold text-left font-['Roboto'] text-sm">
      <td className="border border-gray-300 px-2 py-3 font-medium text-sm text-[#4F669D]">
        Total active partners:
      </td>
      {months.map(m => {
        const month = data[m];
        if (!month) return null;

        return (
          <React.Fragment key={m}>
            <TableCell value={month.plan.activePartners} />
            <TableCell value={month.fact.activePartners} className='border-r border-gray-300' />
          </React.Fragment>
        );
      })}
    </tr>
  </>
);

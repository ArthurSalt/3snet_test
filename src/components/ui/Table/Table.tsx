import React from 'react'

import { useTableData } from '../../../hooks'
import { TotalRows } from './TotalRows'
import { AdminRows } from './AdminRows'
import { MONTHS } from '../../../constants';

type TableProps = {
  visibleMonths: number[]
};

export const Table = ({ visibleMonths }: TableProps) => {
  const { data, loading, error } = useTableData()

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="w-full">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-50 text-[#A6B1B9] font-semibold text-left font-['Roboto'] text-sm">
            <th
              rowSpan={2}
              className="border border-gray-300 px-1 py-3 w-[120px]"
            ></th>
            <th
              rowSpan={2}
              className="border border-gray-300 px-1 py-3 w-[120px]"
            ></th>
            {visibleMonths.map((monthId) => (
              <th
                key={monthId}
                colSpan={2}
                className="border border-gray-300 border-b-transparent px-4 py-1"
              >
                {MONTHS[monthId]}
              </th>
            ))}
          </tr>
          <tr className="bg-blue-50 text-[#A6B1B9] font-semibold text-left font-['Roboto'] text-sm">
            {visibleMonths.map((monthId) => (
              <React.Fragment key={monthId}>
                <th className="border border-gray-300 border-r-transparent px-4 py-2 font-medium text-left">
                  Plan:
                </th>
                <th className="border border-gray-300 border-l-transparent px-4 py-2 font-medium text-left">
                  Fact:
                </th>
              </React.Fragment>
            ))}
          </tr>
        </thead>

        <tbody>
          <TotalRows
            months={visibleMonths}
            data={data.total}
          />

          {data.table.map(admin => (
            <AdminRows
              key={admin.id}
              admin={admin}
              months={visibleMonths}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
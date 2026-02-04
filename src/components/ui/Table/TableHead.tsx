import { Fragment } from "react"
import { MONTHS } from "../../../constants"

type TableHeadProps = {
  visibleMonths: number[]
};

export const TableHead = ({ visibleMonths }: TableHeadProps) => (
  <thead>
    <tr className="bg-blue-50 text-[#A6B1B9] font-semibold text-left font-['Roboto'] text-sm">
      <th rowSpan={2} className="border border-gray-300 px-1 py-3 w-[120px]" />
      <th rowSpan={2} className="border border-gray-300 px-1 py-3 w-[120px]" />
      {visibleMonths.map((monthId) => (
        <th
        key={monthId}
        colSpan={2}
        className="border border-gray-300 border-b-transparent px-4 py-1"
        >
          {MONTHS[monthId]}
        </th>
      ))}
      <th rowSpan={2} className="border border-gray-300 px-1 py-3 w-[40px]" />
    </tr>
    <tr className="bg-blue-50 text-[#A6B1B9] font-semibold text-left font-['Roboto'] text-sm">
      {visibleMonths.map((monthId) => (
        <Fragment key={monthId}>
          <th className="border border-gray-300 border-r-transparent px-4 py-2 font-medium text-left">
            Plan:
          </th>
          <th className="border border-gray-300 border-l-transparent px-4 py-2 font-medium text-left">
            Fact:
          </th>
        </Fragment>
      ))}
    </tr>
  </thead>
)

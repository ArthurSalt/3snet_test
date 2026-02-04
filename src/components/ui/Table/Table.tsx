import { TotalRows } from './TotalRows';
import { AdminRows } from './AdminRows';

import { TableHead } from './TableHead';
import type { TableData } from '../../../types';

type TableProps = {
  visibleMonths: number[];
  data: TableData | null;
  error: boolean;
  loading: boolean;
};

export const Table = ({ visibleMonths, data, loading, error }: TableProps) => {
  if (error) {
    return <p>Error loading data...</p>;
  }

  if (loading || !data) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="w-full">
      <table className="min-w-full border-collapse border border-gray-300">
        <TableHead visibleMonths={visibleMonths} />

        <tbody>
          <TotalRows months={visibleMonths} data={data.total} />

          {data.table.map(admin => (
            <AdminRows key={admin.id} admin={admin} months={visibleMonths} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

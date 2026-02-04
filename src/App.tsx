import { ChevronIcon, TableButtons } from './components';
import { NavTab } from './components/ui/Tabs';
import { Tabs } from './components/ui/Tabs';
import { TableTab } from './components/ui/Tabs';

import { Header } from './components';
import { TABLE_TABS, NAV_TABS } from './constants';
import { Table } from './components';
import { useVisibleMonths } from './hooks/useVisibleMonths';
import { useTableData } from './hooks';

function App() {
  const { data, loading, error } = useTableData();
  const { months, handlePrev, handleNext } = useVisibleMonths();

  return (
    <div>
      <Header />
      <Tabs
        tabs={NAV_TABS}
        sx="flex justify-between text-[#2D3748] h-[68px] px-6 border-[#A6B1B9]"
        renderTab={NavTab}
      />

      <div className="m-10">
        <div className="mt-6 mb-8 ml-2 flex items-center gap-4">
          <ChevronIcon className="rotate-135 w-2 h-2 border-[#202F55]" />
          <p className="font-['Roboto'] font-semibold text-[24px] leading-[20px] tracking-[0.01em] text-[#202F55]">
            Affiliate manager
          </p>
        </div>

        <Tabs tabs={TABLE_TABS} sx="w-auto text-[#A6B1B9] h-[36px] px-2 " renderTab={TableTab} />

        <TableButtons handlePrev={handlePrev} handleNext={handleNext} year={data?.table[0].year} />

        <Table visibleMonths={months} data={data} error={error} loading={loading} />
      </div>
    </div>
  );
}

export default App;

export type Tab = {
  id: string;
  label: string;
};

export type RenderTabProps = {
  label: string;
  isActive: boolean;
};

export type MonthData = {
  income: number;
  activePartners: number;
  plan: {
    income: number;
    activePartners: number;
  };
  fact: {
    income: number;
    activePartners: number;
  };
};

export type TotalMonthData = {
  fact: {
    income: number;
    activePartners: number;
  };
  plan: {
    income: number;
    activePartners: number;
  };
};

export type Admin = {
  id: number;
  adminId: number;
  adminName: string;
  year: number;
  months: MonthData[];
};

export type TableData = {
  total: TotalMonthData[];
  table: Admin[];
};

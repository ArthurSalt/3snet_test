import { useCallback, useMemo, useState } from 'react';

const MONTHS_COUNT = 6;

export const useVisibleMonths = () => {
  const currentMonth = new Date().getMonth();

  const [startMonth, setStartMonth] = useState(currentMonth);

  const months = useMemo(
    () => Array.from({ length: MONTHS_COUNT }, (_, i) => (startMonth + i + 12) % 12),
    [startMonth]
  );

  const handlePrev = useCallback(() => {
    setStartMonth(m => (m - 1 + 12) % 12);
  }, []);

  const handleNext = useCallback(() => {
    setStartMonth(m => (m + 1) % 12);
  }, []);

  return { months, handlePrev, handleNext };
};

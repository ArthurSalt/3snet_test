import { useState, useEffect } from 'react';
import type { TableData } from '../types';

const URL = 'https://3snet.co/js_test/api.json';

export const useTableData = () => {
  const [data, setData] = useState<TableData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.data);
      } catch (err) {
        if (controller.signal.aborted) return;

        console.error('[API] Ошибка загрузки данных:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, loading, error };
};

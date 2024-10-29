'use client';

import Filters from "@/components/layout/Filters";
import Menu from "./dashboard/components/Menu";
import ResultCard from "@/components/layout/ResultCard";
import { useEffect, useState } from "react";
import { useTestResults } from "@/components/hooks/useTestResults";
import { ITestResult } from "@/api/types/TestResultType";

export default function Home() {
  const {getTestResults} = useTestResults();

  const [results, setResults] = useState<Array<ITestResult>>([]);
  const [filters, setFilters] = useState<{
    search: string;
    gasType: string;
    city: string;
    dateRange: Array<string>;
  }>({
    search: '',
    gasType: '',
    dateRange: [],
    city: '',
  });

  useEffect(() => {
    // const fetchData = async () => {
      // };
      (async () => {
      console.log("Filters changed");

      setResults(await getTestResults(filters));
    })();
    // debounce(fetchData, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <main>
      <Menu />
      <div className="p-6 mt-6 flex justify-center">
        <div className="w-full max-w-screen-xl">
          <Filters filters={filters} setFilters={setFilters}/>
          <div className="px-2 md:px-12">
            <ResultCard results={results} />
          </div>
        </div>
      </div>
    </main>
  );
}

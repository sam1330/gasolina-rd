import { ITestResult } from "@/api/types/TestResultType";

export const useTestResults = () => {
  const getTestResults = async ({
    search,
    gasType,
    city,
    dateRange,
  }: {
    search: string;
    gasType: string;
    city: string;
    dateRange: Array<string>;
  }) => {
    console.log('execure fetch', process.env.NEXT_PUBLIC_API);
    let testResults: ITestResult[] = [];
    await fetch(`https://gasolina-rd.onrender.com/test_results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Test_results($filters: TestResultsFilters) {
            test_results(filters: $filters) {
              id
              ron
              plumb
              sulfur
              formatted_date
              color
              gas_type_name
              establishment_name
              establishment_address
              observations
            }
          }`,
        variables: {
          filters: {
            search,
            gasType,
            city,
            dateRange,
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        testResults = data.data.test_results;
      })
      .catch((error) => console.log(error));

    return testResults;
  };

  return {
    getTestResults,
  };
};

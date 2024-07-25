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
    dateRange: string;
  }) => {
    let testResults: ITestResult[] = [];
    await fetch("http://localhost:4000/test_results", {
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
              date
              color
              gas_type_name
              establishment_name
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

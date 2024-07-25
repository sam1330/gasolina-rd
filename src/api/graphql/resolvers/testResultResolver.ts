import TestResult from "../../database/TestResult";
import { ITestResult, TestResultFilters } from "@/api/types/TestResultType";


const testResultResolver = {
    Query: {
        test_results: (_:any, filters: TestResultFilters): Promise<ITestResult[]> => {
            return TestResult.getTestResults(filters);
        },
    },
    Mutation: {
        createTestResult: (parent: any, args: any) => {
            return TestResult.createTestResult(args.data);
        }
    }
};

export default testResultResolver;
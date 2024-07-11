import TestResult from "../../database/TestResult";
import { ITestResult } from "@/api/types/TestResultType";


const testResultResolver = {
    Query: {
        test_results: (): Promise<ITestResult[]> => {
            return TestResult.getTestResults();
        },
    },
    Mutation: {
        createTestResult: (parent: any, args: any) => {
            return TestResult.createTestResult(args.data);
        }
    }
};

export default testResultResolver;
import { ITestResult } from "../types/TestResultType";
import Connection from "./Connection";
import { v4 as uuidv4 } from "uuid";

class TestResult {
    private constructor(
    ) {
    }

    public static async getTestResults(): Promise<Array<ITestResult>> {
        const [testResults] = await Connection.instance.query(`SELECT * FROM test_results;`);

        return testResults as Array<ITestResult>;
    }

    public static async createTestResult(data: any): Promise<boolean> {
        const uuid = uuidv4();
        const [testResults] = await Connection.instance.query(`SELECT * FROM test_results;`);
        console.log(data, testResults, uuid);

        return true;
    }
}

export default TestResult;
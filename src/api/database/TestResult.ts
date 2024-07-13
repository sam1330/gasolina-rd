import { ITestResult } from "../types/TestResultType";
import { convertUuidToID } from "../utils/uuidToID";
import Connection from "./Connection";
import { v4 as uuidv4 } from "uuid";

class TestResult {
  private constructor() {}

  public static async getTestResults(): Promise<Array<ITestResult>> {
    const [testResults] = await Connection.instance.query(
      `SELECT * FROM test_results;`
    );

    return testResults as Array<ITestResult>;
  }

  public static async createTestResult(data: any): Promise<string> {
    const uuid = uuidv4();



    const [testResults] = await Connection.instance.query(
      `INSERT INTO test_results (uuid, establishment_id, gas_type_id, date, ron, plumb, sulfur, color, observations) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        uuid,
        await convertUuidToID("establishments", data.establishment_id),
        await convertUuidToID("gas_types", data.gas_type_id),
        data.date,
        data.ron,
        data.plumb,
        data.sulfur,
        data.color,
        data.observations,
      ]
    );

    console.log(testResults);

    return 'Test Result created successfully';
  }
}

export default TestResult;
